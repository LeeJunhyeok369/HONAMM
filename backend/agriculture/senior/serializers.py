from rest_framework import serializers
from .models import Senior
from village.models import Village


class VillagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Village
        fields = '__all__'

class SeniorSerializer(serializers.ModelSerializer):
    townId = serializers.PrimaryKeyRelatedField(
    queryset=Village.objects.all(),
    write_only=True  # POST 요청 시에만 사용
    )
    town = VillagesSerializer(read_only=True, source='townId')
    intro_image = serializers.ImageField(use_url=True)
    house_image = serializers.ImageField(use_url=True)
    senior_image = serializers.ImageField(use_url=True)

    class Meta:
        model = Senior
        fields = (
            'senior_id',
            'townId',
            'town',
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
            'create_at',
        )

class SeniorPostSerializer(serializers.ModelSerializer):
    user = SeniorSerializer(read_only=True)

    class Meta:
        model = Senior
        fields = '__all__'
        read_only_fields = ('create_at',)