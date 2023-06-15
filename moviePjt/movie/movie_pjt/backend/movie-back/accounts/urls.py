from django.urls import path
from accounts import views

# accounts/ => enculde
urlpatterns = [
    # 유저 아이디로 접근
    path('profile/<int:user_id>/', views.profile_user_id, name='profile_user_id'),
    # 유저 이름으로 접근
    path('profile/<str:username>/', views.profile_username, name='profile_username'),
    # 팔로우
    path('profile/<str:username>/follow/', views.follow, name='follow'), 
    # 내 팔로워 조회
    path('profile/<int:user_id>/follower/', views.followed_users, name='followed_users'), 
    # 내가 팔로잉 하는 사람 조회
    path('profile/<int:user_id>/following/', views.following_users, name='following_users'), 
    # 유저 프로필 사진
    path('profile/<int:user_id>/picture/', views.user_profile_picture, name='user_profile_picture'), 
    # 유저 자기 소개
    path('profile/<int:user_id>/introduce/', views.user_introduce, name='user_introduce'), 

]
