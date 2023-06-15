from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated

import json
import random

from django.shortcuts import get_list_or_404, get_object_or_404
from movies.serializers import MovieListSerializer, MovieSerializer, NowMovieListSerializer, ReviewListSerializer, ReviewCreateSerializer, ReviewSerializer
from accounts.serializers import UserSerializer
from movies.models import Movie, Genre, Nowplaying, Review, Like
from accounts.models import User
from rest_framework import status

# 영화 전체 조회
@api_view(['GET',])
@permission_classes([IsAuthenticatedOrReadOnly])
def movie_popular_list(request):
    if request.method == 'GET':
        movies = get_list_or_404(Movie.objects.order_by('-vote_average'))

        movies = movies[:20]

        movie_list = []
        for movie in movies:
            movie_dict = {
                'id': movie.id,
                'title': movie.title,
                'release_date': movie.release_date,
                'popularity': movie.popularity,
                'vote_count': movie.vote_count,
                'vote_average': movie.vote_average,
                'overview': movie.overview,
                'poster_path': movie.poster_path,
                'youtube_key': movie.youtube_key,
                'user_click': movie.user_click
            }
            movie_list.append(movie_dict)

    return Response({'movies': movie_list})


# 영화 전체 조회
@api_view(['GET',])
@permission_classes([IsAuthenticatedOrReadOnly])
def movie_list(request):
    if request.method == 'GET':
        movies = get_list_or_404(Movie.objects.order_by())

        movie_list = []
        for movie in movies:
            movie_dict = {
                'id': movie.id,
                'title': movie.title,
                'release_date': movie.release_date,
                'popularity': movie.popularity,
                'vote_count': movie.vote_count,
                'vote_average': movie.vote_average,
                'overview': movie.overview,
                'poster_path': movie.poster_path,
                'youtube_key': movie.youtube_key,
                'user_click': movie.user_click
            }
            movie_list.append(movie_dict)

    return Response({'movies': movie_list})
    
# 최근 영화 전체 조회
# 영화 전체 조회
@api_view(['GET',])
@permission_classes([IsAuthenticatedOrReadOnly])
def now_movie_list(request):
    if request.method == 'GET':
        now_playing_movies = get_list_or_404(Nowplaying.objects.order_by())[:50]
        serializer = NowMovieListSerializer(now_playing_movies, many=True)
        return Response(serializer.data)
    
# 영화 디테일 조회(GET)
@api_view(['GET',])
@permission_classes([IsAuthenticatedOrReadOnly])
def movie_detail(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    # 조회(GET)일 경우
    if request.method == 'GET':
        serializer = MovieSerializer(movie)
        return Response(serializer.data)

# 장르로 영화 조회
@api_view(['GET',])
@permission_classes([IsAuthenticatedOrReadOnly])
def movie_list_by_genre(request):
    # 클라이언트로부터 받은 genre 정보를 파싱합니다.
    # genre_info = json.loads(request.body)
    # genre_name = genre_info['genre_name']
    genre_name = request.GET.get('genre_name')

    # Genre 모델에서 검색할 genre를 가져옵니다.
    genre = Genre.objects.get(name=genre_name)

    # 가져온 genre를 사용하여 해당 genre에 속하는 영화를 검색합니다.
    movies = genre.movie_set.all()

    # 검색된 영화 정보를 JSON 형식으로 반환합니다.
    movie_list = []
    for movie in movies:
        movie_dict = {
            'id': movie.id,
            'title': movie.title,
            'release_date': movie.release_date,
            'popularity': movie.popularity,
            'vote_count': movie.vote_count,
            'vote_average': movie.vote_average,
            'overview': movie.overview,
            'poster_path': movie.poster_path,
            'youtube_key': movie.youtube_key,
            'user_click': movie.user_click
        }
        movie_list.append(movie_dict)

    return Response({'movies': movie_list})

@api_view(['GET'])
@permission_classes([IsAuthenticatedOrReadOnly])
def now_movie_list(request):
    nowmovies = get_list_or_404(Nowplaying.objects.order_by('-popularity'))
    serializer = NowMovieListSerializer(nowmovies, many=True)
    return Response(serializer.data)

# 특정 영화에 있는 리뷰들 조회, 생성
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticatedOrReadOnly])
def review_list_create(request, movie_pk):
  if request.method == 'GET':
    reviews = Review.objects.filter(movie_id=movie_pk)
    serializer = ReviewListSerializer(reviews, many=True)
    return Response(serializer.data)
  
  elif request.method == 'POST':
    movie = get_object_or_404(Movie, pk=movie_pk)
    serializer = ReviewCreateSerializer(data=request.data)

    if serializer.is_valid(raise_exception=True):
        # user, movie 외래키 참조 객체 설정
        serializer.save(user=request.user, movie = movie)
        print(serializer.data.get('user'))

        user = get_object_or_404(User, pk=serializer.data.get('user'))
        user_serializer = UserSerializer(user)
        context = {
            'message': '리뷰가 작성되었습니다.',
            'id': serializer.data.get('id'),
            'content': serializer.data.get('content'),
            'created_at': serializer.data.get('created_at'),
            'good_user': serializer.data.get('good_user'),
            'user': serializer.data.get('user'),
            'username' : user_serializer.data.get('username'),
            'rank': serializer.data.get('rank'),
        }
        return Response(context, status=status.HTTP_201_CREATED)
    
    return Response(status=status.HTTP_400_BAD_REQUEST)
  

# 특정 movie 에 있는 특정 리뷰 조회(GET), 수정(PUT), 삭제(DELETE)   
@api_view(['GET', 'DELETE', 'PUT'])
@permission_classes([IsAuthenticatedOrReadOnly])
def review_detail(request, review_pk):
    review = get_object_or_404(Review, pk=review_pk)

    if request.method == 'GET':
        serializer = ReviewSerializer(review)

        return Response(serializer.data)
    else:
        # 현재 리뷰 작성자와 현재 유저가 같으면 삭제, 수정 가능
        if request.user == review.user:
            # 삭제
            if request.method == 'DELETE':
                review.delete()
                data = {
                    f'{review_pk}번 리뷰가 삭제되었습니다.'
                }
                return Response(data, status=status.HTTP_204_NO_CONTENT)
            # 수정
            if request.method == 'PUT':
                serializer = ReviewSerializer(review, data=request.data)
                if serializer.is_valid(raise_exception=True):
                    serializer.save()
                    return Response(serializer.data)
        # 현재 리뷰 작성자와 현재 유저가 다르면
        else:
            return Response(status=status.HTTP_403_FORBIDDEN)
        
# 리뷰 좋아요
@api_view(['POST'])
def like(request, review_pk):
    review = get_object_or_404(Review, pk=review_pk)
    user = request.user
    if review.good_user.filter(pk=user.pk).exists():
        review.good_user.remove(user)
        is_liked = False
    else:
        review.good_user.add(user)
        is_liked = True

    context = {
        'is_liked': is_liked, 
        'count': review.good_user.count()
    }

    return Response(context, status=status.HTTP_200_OK)

# 영화 좋아요 
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def like_movie(request, movie_id):
    user = request.user
    movie = Movie.objects.get(pk=movie_id)

    if movie.like_users.filter(pk=user.pk).exists():
        movie.like_users.remove(user)
        is_liked = False
    else:
        movie.like_users.add(user)
        is_liked = True

    context = {
        'is_liked': is_liked, 
        'count': movie.like_users.count(),
        'movie_id' : movie_id,
        'user_id' : user.id
    }

    return Response(context, status=status.HTTP_200_OK)


    # user.like_movie(movie)
    # return Response({ 'message' : 'ok' })

@api_view(['GET',])
@permission_classes([IsAuthenticated])
def recommend_genre(request):
    # Create a dictionary to keep track of the number of likes for each genre.
    genre_likes = {}

    # Loop through all movies and increment the like count for each genre that has been liked by a user.
    for movie in Movie.objects.all():
        for user in movie.like_users.all():
            genre_name = movie.genres.first().name
            if genre_name in genre_likes:
                genre_likes[genre_name] += 1
            else:
                genre_likes[genre_name] = 1

    # Find the genre with the highest like count.
    if len(genre_likes) > 0:
        top_genre = max(genre_likes, key=genre_likes.get)
            # Genre 모델에서 검색할 genre를 가져옵니다.
        genre = Genre.objects.get(name=top_genre)

        # 가져온 genre를 사용하여 해당 genre에 속하는 영화를 검색합니다.
        movies = genre.movie_set.all()
    else:
        movies = Movie.objects.all()


    if len(movies) >= 20:
        movies = random.sample(list(movies), k=20)
    
    # 검색된 영화 정보를 JSON 형식으로 반환합니다.
    movie_list = []
    for movie in movies:
        movie_dict = {
            'id' : movie.id,
            'title': movie.title,
            'release_date': movie.release_date,
            'popularity': movie.popularity,
            'vote_count': movie.vote_count,
            'vote_average': movie.vote_average,
            'overview': movie.overview,
            'poster_path': movie.poster_path,
            'youtube_key': movie.youtube_key,
            'user_click': movie.user_click
        }
        movie_list.append(movie_dict)

    return Response({'movies': movie_list})


@api_view(['GET',])
@permission_classes([IsAuthenticatedOrReadOnly])
def liked_movies(request, user_id):
    # user = User.objects.get(id=user_id)
    # liked_movies = Like.objects.filter(user=user).values_list('movie_id', flat=True)
    # movies = Movie.objects.filter(pk__in=liked_movies)

    # return Response(liked_movies)

    user = User.objects.get(id=user_id)
    liked_movies = Movie.objects.filter(like_users=user)

    serializer = MovieSerializer(liked_movies, many=True)
    return Response(serializer.data)