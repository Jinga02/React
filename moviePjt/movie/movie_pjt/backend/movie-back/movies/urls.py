from django.urls import path
from movies import views_tmdb, views

# movies/ => enculde
urlpatterns = [
    # API 데이터 DB 저장
    # path('tmdb/', views_tmdb.tmdb_data),
    # 전체 영화 조회(GET)
    path('', views.movie_list),
    # popular 영화 조회(GET)
    path('popular/', views.movie_popular_list),
    # movie_Detail 조회(GET)
    path('<int:movie_pk>/', views.movie_detail),
    # 장르로 영화 목록 조회
    path('genre/', views.movie_list_by_genre),
    # 현재 상영중인 영화 조회(GET)
    path('now/', views.now_movie_list),
    # 특정 movie 에 있는 전체 리뷰 조회(GET), 생성(POST)
    path('<int:movie_pk>/review/', views.review_list_create, name='review_list_create'),
    # 특정 movie 에 있는 특정 리뷰 조회(GET), 수정(PUT), 삭제(DELETE)   
    path('review/<int:review_pk>/', views.review_detail, name='review_detail'),
    # 리뷰 좋아요
    path('review/<int:review_pk>/like/', views.like, name='like'),
    # 영화 추천
    path('recommend_genre/', views.recommend_genre, name='recommend_genre'),
    # 영화 좋아요
    path('like_movie/<int:movie_id>/', views.like_movie, name='like_movie'),
    # 좋아요 한 영화 영화 조회
    # path('<int:user_id>/liked_movies/', views.liked_movies, name='liked_movies'),
    path('<int:user_id>/liked_movies/', views.liked_movies, name='liked_movies'),
]
