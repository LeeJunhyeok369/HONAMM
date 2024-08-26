from rest_framework import serializers
from review.models import Review

class ReviewSerializer(serializers.ModelSerializer):
    review_image = serializers.ImageField(use_url=True)

    class Meta:
        model = Review
        fields = (
            'reserveId',
            'userId',
            'review_image',
            'review_text',
        )

class ReviewPostSerializer(serializers.ModelSerializer):
    user = ReviewSerializer(read_only=True)

    class Meta:
        model = Review
        fields = '__all__'
        read_only_fields = ('create_at',)
