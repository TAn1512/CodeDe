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

const enMessages = {
    html: {
        formattingTags,
        sidebar,
        headingTags,
        introduction,
        paragraphTags,
        stylesTags,
        linkTags
    },
    global: {
        navbar,
        footer,
    },
    home: {
        homePage
    },
    algorithms: {
        algorithmsPage
    }
};


export default enMessages;
