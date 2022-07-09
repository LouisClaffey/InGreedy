import axios from "axios";

class RecipeServiceGet {
  execute() {
    return axios.get("http://localhost:8080/recipes");
  }
}

export default new RecipeServiceGet();
