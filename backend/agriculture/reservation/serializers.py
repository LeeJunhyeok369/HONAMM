from rest_framework import serializers
from reservation.models import Reservation

class ReservationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Reservation
        fields = (
            'seniorId',
            'userId',
            'start_date',
            'end_date',
        )

class ReservePostSerializer(serializers.ModelSerializer):
    user = ReservationSerializer(read_only=True)

    class Meta:
        model = Reservation
        fields = '__all__'
        read_only_fields = ('create_at',)
