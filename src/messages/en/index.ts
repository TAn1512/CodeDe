import algorithmsPage from "./algorithms/algorithmsPage";
import footer from "./global/footer";
import navbar from "./global/navbar";
import homePage from "./home/homePage";
import formattingTags from "./html/formattingTags";
import headingTags from "./html/headingTags";
import introduction from "./html/introduction";
import sidebar from "./html/sidebar";
import paragraphTags from "./html/paragraphTags";
import stylesTags from "./html/stylesTags";
import linkTags from "./html/linkTags";
import imageTags from "./html/imageTags";
import listTags from "./html/listTags";
import formTags from "./html/formTags";
import { bubbleExplanation } from "./algorithms/bubbleExplanation";
import { insertionExplanation } from "./algorithms/insertionExplanation";
import { selectionExplanation } from "./algorithms/selectionExplanation";

const enMessages = {
    html: {
        formattingTags,
        sidebar,
        headingTags,
        introduction,
        paragraphTags,
        stylesTags,
        linkTags,
        imageTags,
        listTags,
        formTags,
    },
    global: {
        navbar,
        footer,
    },
    home: {
        homePage
    },
    algorithms: {
        algorithmsPage,
        bubbleExplanation,
        insertionExplanation,
        selectionExplanation
    }
};


export default enMessages;
