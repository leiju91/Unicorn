<?php

namespace App\Form;

use App\Entity\Category;
use App\Entity\Event;
use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EventType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title')
            ->add('content')
            ->add('created_at')
            ->add('featured_image')
            ->add('category', EntityType::class, [
                'class' => Category::class,
                "expanded" => true,
                "multiple" => false,
                'query_builder' => function (EntityRepository $er) {
                    // Modifie la requête d'affichage de la liste des catégories
                    return $er->createQueryBuilder('c')
                        ->orderBy('c.title', 'asc') // ordonné title par ordre alphabétique 
                    ;
                },
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Event::class,
        ]);
    }
}
