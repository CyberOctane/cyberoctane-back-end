from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('pages.urls')),
    path('team/', include('team.urls')),
    path('admin/', admin.site.urls),
]
