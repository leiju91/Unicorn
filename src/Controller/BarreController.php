<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class BarreController extends AbstractController
{
    /**
     * @Route("/barre", name="barre")
     */
    public function index()
    {
        return $this->render('barre/index.html.twig', [
            'controller_name' => 'BarreController',
        ]);
    }
}
