<?php 

namespace App\Menu;

use Knp\Menu\FactoryInterface;

class Builder
{
    private $factory;

    public function __construct(FactoryInterface $factory)
    {
        $this->factory = $factory;
    }

    /**
     * Méthode appelée pour gérer le menu mainMenu
    */
    public function mainMenu(array $options)
    {
        $menu = $this->factory->createItem("root");

        // Ajout d'élèments dans le menu
        $menu->addChild("events", [
            "route" => "event_index",
        ]);

        return $menu;
    }

}

?>