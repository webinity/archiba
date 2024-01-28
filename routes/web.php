<?php

use Slim\App;
use Slim\Psr7\Request;
use Slim\Psr7\Response;
use Slim\Views\Twig;

return function (App $app, Twig $view){
    /**
     * Register web routes here
     * This file gets loaded only if RoutesService is loaded in config
     *
     * If you wish to unload this specific file, remove the reference in RoutesService.php
     */
    $app->get('/', function (Request $request, Response $response) use ($view) {
        return $view->render($response, 'pages/main.twig');
    });

    $app->get('/bio', function (Request $request, Response $response) use ($view) {
        return $view->render($response, 'pages/bio.twig');
    });

    $app->get('/sluzby', function (Request $request, Response $response) use ($view) {
        return $view->render($response, 'pages/sluzby.twig');
    });

    $app->get('/projekty', function (Request $request, Response $response) use ($view) {
        return $view->render($response, 'pages/projekty.twig');
    });

    $app->get('/projekty/byt-veleslavin', function (Request $request, Response $response) use ($view) {
        return $view->render($response, 'pages/projekty-pages/byt-veleslavin.twig');
    });

    $app->get('/projekty/hilmarovo-namesti', function (Request $request, Response $response) use ($view) {
        return $view->render($response, 'pages/projekty-pages/hilmarovo-namesti.twig');
    });

    $app->get('/projekty/revitalizace-sidliste-v-kopidlne', function (Request $request, Response $response) use ($view) {
        return $view->render($response, 'pages/projekty-pages/revitalizace-sidliste-v-kopidlne.twig');
    });

    $app->get('/projekty/rd-zelena-cesta', function (Request $request, Response $response) use ($view) {
        return $view->render($response, 'pages/projekty-pages/rd-zelena-cesta.twig');
    });

    $app->get('/projekty/budova-byvaleho-forda', function (Request $request, Response $response) use ($view) {
        return $view->render($response, 'pages/projekty-pages/budova-byvaleho-forda.twig');
    });

    $app->get('/projekty/tovarna-na-krasno', function (Request $request, Response $response) use ($view) {
        return $view->render($response, 'pages/projekty-pages/tovarna-na-krasno.twig');
    });

    $app->get('/projekty/rd-karovsko', function (Request $request, Response $response) use ($view) {
        return $view->render($response, 'pages/projekty-pages/rd-karovsko.twig');
    });

    $app->get('/projekty/byt-evropska', function (Request $request, Response $response) use ($view) {
        return $view->render($response, 'pages/projekty-pages/byt-evropska.twig');
    });
    
    $app->get('/projekty/hajenka', function (Request $request, Response $response) use ($view) {
        return $view->render($response, 'pages/projekty-pages/hajenka.twig');
    });

    $app->get('/projekty/rd-sedmihorky', function (Request $request, Response $response) use ($view) {
        return $view->render($response, 'pages/projekty-pages/rd-sedmihorky.twig');
    });

    $app->get('/projekty/socha-tgm', function (Request $request, Response $response) use ($view) {
        return $view->render($response, 'pages/projekty-pages/socha-tgm.twig');
    });

    $app->get('/projekty/byt-bubenec', function (Request $request, Response $response) use ($view) {
        return $view->render($response, 'pages/projekty-pages/byt-bubenec.twig');
    });

    $app->get('/projekty/byt-pardubice', function (Request $request, Response $response) use ($view) {
        return $view->render($response, 'pages/projekty-pages/byt-pardubice.twig');
    });

    $app->get('/projekty/byt-domazlice', function (Request $request, Response $response) use ($view) {
        return $view->render($response, 'pages/projekty-pages/byt-domazlice.twig');
    });

    $app->get('/controller', \Webinity\App\Controllers\HomeController::class . ':index');
};
