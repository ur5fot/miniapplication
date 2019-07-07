import { UserInterface } from "@/models/UserInterface";
import { NewsInterface } from "@/models/NewsInterface";

export interface StateInterface {
   user: UserInterface;
   news: NewsInterface[]
}
