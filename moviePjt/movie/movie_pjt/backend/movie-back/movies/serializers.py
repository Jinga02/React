from rest_framework import serializers
from movies.models import Movie, Nowplaying, Review, Genre, Actor

from accounts.serializers import UserSerializer

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ('id', 'name')

class ActorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actor
        fields = ('__all__')
        
class MovieListSerializer(serializers.ModelSerializer):
    genres = GenreSerializer(many=True)
    class Meta:
        model = Movie
        fields = ('__all__')
        # exceptions = ('actors, like_users, genres')


# 상세 영화 전체 리뷰 조회(GET)
class ReviewListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('__all__')
        read_only_fields = ('user', 'movie',)
        # 작성 불요 (read_only_fields)


class MovieSerializer(serializers.ModelSerializer):
    genres = GenreSerializer(many=True)
    actors = ActorSerializer(many=True)
    review_set = ReviewListSerializer(many=True, read_only=True)
    class Meta:
        model = Movie
        fields = '__all__'
        # read_only_fields = ('FK',)

class NowMovieListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Nowplaying
        fields = ('__all__')
        # exceptions = ('actors, like_users, genres')


# 상세 영화 전체 리뷰 조회(GET)
class ReviewListSerializer(serializers.ModelSerializer):

    user = UserSerializer()

    class Meta:
        model = Review
        fields = ('__all__')
        read_only_fields = ('user', 'movie',)
        # 작성 불요 (read_only_fields)

# 영화에 대한 리뷰 작성(POST) 2022.11.19 류원창 수정
class ReviewCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('id', 'created_at', 'content', 'user', 'rank', 'good_user',)
        read_only_fields = ('id', 'created_at', 'good_user', 'bad_user')
        # 작성 불요 (read_only_fields)

# 상세 리뷰 조회(GET)
class ReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = ('__all__')
        read_only_fields = ('user', 'movie', 'good_user', 'bad_user')
        # 작성 불요 (read_only_fields)