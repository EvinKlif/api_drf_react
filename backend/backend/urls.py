
from django.contrib import admin
from django.urls import path, include, re_path
from server.views import NotesAPIView, DeleteApiView, UpdateApiView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/notes', NotesAPIView.as_view()),
    path('api/notes/update/<int:pk>/', UpdateApiView.as_view()),
    path('api/notes/delete/<int:pk>/', DeleteApiView.as_view()),
    path('auth/', include('djoser.urls')),
    re_path(r'^auth/', include('djoser.urls.authtoken')),

]
