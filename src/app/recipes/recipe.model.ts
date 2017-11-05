export class Recipe {   // a model for every instance of recipe, recipes itself collected in recipes.service
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, description: string, imagePath: string){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }
}
