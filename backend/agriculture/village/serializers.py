from rest_framework import serializers
from village.models import Village

class VillageSerializer(serializers.ModelSerializer):
    village_image = serializers.ImageField(use_url=True)

    class Meta:
        model = Village
        fields = (
            'village_name',
            'village_image',
            'place_x',
            'place_y',
            'address',
            'village_details',
            'village_category',
        )

class VillagePostSerializer(serializers.ModelSerializer):
    user = VillageSerializer(read_only=True)
    
    class Meta:
        model = Village
        fields = '__all__'
        read_only_fields = ('created_at',)

