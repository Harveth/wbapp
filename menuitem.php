<?php
    class item{
        public $id;
        public $name;
        public $description;
        public $type;
        public $price;
        public $image;

        function __construct($id, $name,$description, $type, $price,$image){
            $this->id = $id;
            $this->name = $name;
            $this->description = $description;
            $this->type = $type
            $this->price = $price;
            $this->image = $image;

        }
    }
?>