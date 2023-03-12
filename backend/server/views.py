from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly

from .models import Notes
from server.serialization import NoteSerializer


class NotesAPIView(generics.ListCreateAPIView):
    queryset = Notes.objects.all()
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


    def get_queryset(self):
        user = self.request.user
        return Notes.objects.filter(user_id=self.request.user)

class  DeleteApiView(generics.RetrieveDestroyAPIView):
    queryset = Notes.objects.all()
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]



class UpdateApiView(generics.UpdateAPIView):
    queryset = Notes.objects.all()
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

