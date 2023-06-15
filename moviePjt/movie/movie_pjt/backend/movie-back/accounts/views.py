from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model
from accounts.serializers import UserSerializer
from rest_framework.decorators import api_view
from rest_framework.decorators import permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from .models import User
from rest_framework import status
import os


# 유저 아이디로 접근
# 유저 정보 조회, 수정
@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticated])
def profile_user_id(request, user_id):
    user = get_object_or_404(get_user_model(), id=user_id)
    if request.method == 'GET':
        serializer = UserSerializer(user)

        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = UserSerializer(user, data=request.data)

        if serializer.is_valid(raise_exception=True):
            serializer.save()

            return Response(serializer.data)

        
# 유저 이름으로 접근
# 유저 정보 조회, 수정
@api_view(['GET', 'PUT'])
def profile_username(request, username):
    user = get_object_or_404(get_user_model(), username=username)
    if request.method == 'GET':
        serializer = UserSerializer(user)

        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = UserSerializer(user, data=request.data)

        if serializer.is_valid(raise_exception=True):
            serializer.save()

            return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
# 팔로우
def follow(request, username):
    if request.method == 'POST':
        target_user = User.objects.get(username=username)
        follower = request.user

        # 자기 자신 팔로우 한 경우
        if follower == target_user:
            return Response({"error": "자기 자신은 팔로우 할 수 없습니다"}, status=status.HTTP_400_BAD_REQUEST)

        if follower.followings.filter(username=target_user.username).exists():
            # 이미 팔로우 중인 경우, 팔로우 해제
            follower.followings.remove(target_user)
            is_followed = False
        else:
            # 팔로우 추가
            follower.followings.add(target_user)
            is_followed = True

        following_users = follower.followings.all()
        followed_users = User.objects.filter(followings=follower)
        context = {
            'is_followed': is_followed,
            'target_followers_count': target_user.followers.count(),
            'target_followings_count': target_user.followings.count(),
            'now_followings_count' : following_users.count(),
            'now_followers_count' : followed_users.count()
        }
        return Response(context, status=status.HTTP_200_OK)
    
# 내 팔로워 조회
@api_view(['GET'])
@permission_classes([IsAuthenticatedOrReadOnly])
def followed_users(request, user_id):
    user = User.objects.get(pk=user_id)
    followed_users = User.objects.filter(followings=user)
    serializer = UserSerializer(followed_users, many=True)
    return Response(serializer.data)

# 내가 팔로잉 하는 사람 조회
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def following_users(request, user_id):
    user = User.objects.get(pk=user_id)
    following_users = user.followings.all()
    serializer = UserSerializer(following_users, many=True)
    return Response(serializer.data)

# 유저 프로필 사진
@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticated])
def user_profile_picture(request, user_id):
    user = User.objects.get(pk=user_id)

    if request.method == 'PUT':
        print('들어옴?')
        profile_picture = request.FILES.get('profile_picture')

        if profile_picture:
            print('사진 잇음?')
            if user.profile_picture:
                os.remove(user.profile_picture.path)

            user.profile_picture = profile_picture
            user.save()

        serializer = UserSerializer(user)
        return Response(serializer.data)

    print('사진 get')
    serializer = UserSerializer(user)
    return Response(serializer.data)

# 유저 자기소개
@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticated])
def user_introduce(request, user_id):
    user = User.objects.get(pk=user_id)
    if request.method == 'PUT':
        introduce = request.data.get('introduce')

        print(introduce)

        user.introduce = introduce
        user.save()
        return Response(introduce)
    
    return Response(user.introduce)
    

    
