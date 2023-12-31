from rest_framework import serializers
from .models import BlogPost, Comment

class BlogPostTitleExcerptSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ['id','title', 'excerpt']

class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
