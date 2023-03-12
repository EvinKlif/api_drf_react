from rest_framework import serializers

from server.models import Notes


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notes
        fields = ('pk','title', 'content', 'user')
