<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends AbstractController
{
    /**
     * @Route("/", name="app")
     */
    public function home()
    {
        return $this->render('app/home.html.twig', [
            'controller_name' => 'AppController',
        ]);
    }

    /**
     * @Route("/accueil", name="accueil")
     */
    public function accueil()
    {
        return $this->render('app/accueil.html.twig', [
            'controller_name' => 'AppController',
        ]);
    }

    /**
     * @Route("/contact", name="contact")
     */
    public function contact()
    {
        return $this->render('contact/index.html.twig', [
            'controller_name' => 'AppController',
        ]);
    }
}
