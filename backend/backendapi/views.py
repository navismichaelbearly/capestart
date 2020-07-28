from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from .models import Book, Author
from .serializers import BookSerializer, AuthorSerializer

from rest_framework.decorators import api_view

@api_view(['GET'])
def welcome(request):
  content = { 'message': 'Capestart assignment App!' }
  return JsonResponse(content, status=200)

@api_view(['GET'])
def book_list(request):
    #books = Book.objects.all()
    #bookserializer = BookSerializer(books, many=True)
    #return JsonResponse(bookserializer.data, status=200)
    #return JsonResponse({["test"]}, status=200)
    content = { 'message': 'Capestart assignment App!' }
    return JsonResponse(content, status=200)

@api_view([ 'GET'])
def author_list(request):
    authros = Author.objects.all()
    authorserializer = AuthorSerializer(books, many=True)
    return JsonResponse(AuthorSerializer.data, status=200)

@api_view(['POST'])
def create_book(request):
    bookserializer = BookSerializer(data=request.data)
    if bookserializer.is_valid():
        bookserializer.save()
        return Response(bookserializer.data, status=status.HTTP_201_CREATED)
    return Response(bookserializer.errors, status=status.HTTP_400_BAD_REQUEST)
