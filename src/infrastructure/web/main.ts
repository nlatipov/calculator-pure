import { createWebController } from "../../adapters/controllers/WebController";
import { presentWeb } from "../../adapters/presenters/WebPresenter";

const controller = createWebController(presentWeb);

controller.setupEventListeners();

