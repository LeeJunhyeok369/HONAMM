from rest_framework import serializers
from .models import Senior

class SeniorSerializer(serializers.ModelSerializer):
    intro_image = serializers.ImageField(use_url=True)
    house_image = serializers.ImageField(use_url=True)
    senior_image = serializers.ImageField(use_url=True)

    class Meta:
        model = Senior
        fields = (
            'townId',
            'senior_name',
            'gender',
            'main_category',
            'sub_category',
            'occupation',
            'intro_image',
            'intro_text',
            'house_image',
            'senior_image',
            'price',
        )

class SeniorPostSerializer(serializers.ModelSerializer):
    user = SeniorSerializer(read_only=True)

    class Meta:
        model = Senior
        fields = '__all__'
        read_only_fields = ('create_at',)