/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
import withAsyncImport from "../utils/withAsyncImport";

import './Page/Page';
import './Container/Container';
import './ExperienceFragment/ExperienceFragment';

import {MapTo} from '@adobe/aem-react-editable-components';

import {
    CarouselV1IsEmptyFn
} from '@adobe/aem-core-components-react-spa/dist/isEmptyFunctions';

import {
    TitleV2IsEmptyFn
} from '@adobe/aem-core-components-react-base/dist/isEmptyFunctions';

import {
    ContainerV1, ContainerV1IsEmptyFn,
    TabsV1, TabsV1IsEmptyFn,
    AccordionV1,AccordionV1IsEmptyFn,
} from '@adobe/aem-core-components-react-spa';

import {
    BreadCrumbV2,BreadCrumbV2IsEmptyFn,
    ButtonV1,ButtonV1IsEmptyFn,
    ImageV2,ImageV2IsEmptyFn,
    LanguageNavigationV1,
    NavigationV1,
    TeaserV1,TeaserV1IsEmptyFn,
    DownloadV1,DownloadV1IsEmptyFn,
    SeparatorV1,SeparatorV1IsEmptyFn,
    ListV2,ListV2IsEmptyFn
} from '@adobe/aem-core-components-react-base';


/**
 * Internal custom component imports
 */
import Saludo from './Saludo/Saludo';
import Header from './Header/Header';

//lazyload / code splitting example of an internal component
const LazyTextComponent = withAsyncImport(() => import(`./Text/Text`));

//lazyload / code splitting examples of external components
const TitleV2 = withAsyncImport(() => import(`@adobe/aem-core-components-react-base/dist/authoring/title/v2/TitleV2`));
const CarouselV1 = withAsyncImport(() => import(`@adobe/aem-core-components-react-spa/dist/container/carousel/v1/CarouselV1`));


MapTo('holafuturospa/components/download')(DownloadV1, {isEmpty: DownloadV1IsEmptyFn});
MapTo('holafuturospa/components/list')(ListV2, {isEmpty: ListV2IsEmptyFn});
MapTo('holafuturospa/components/separator')(SeparatorV1, {isEmpty: SeparatorV1IsEmptyFn});

MapTo('holafuturospa/components/button')(ButtonV1, {isEmpty: ButtonV1IsEmptyFn});
MapTo('holafuturospa/components/teaser')(TeaserV1, {isEmpty: TeaserV1IsEmptyFn});
MapTo('holafuturospa/components/image')(ImageV2, {isEmpty: ImageV2IsEmptyFn});
MapTo('holafuturospa/components/title')(TitleV2, {isEmpty: TitleV2IsEmptyFn});


MapTo('holafuturospa/components/breadcrumb')(BreadCrumbV2, {isEmpty: BreadCrumbV2IsEmptyFn});
MapTo('holafuturospa/components/navigation')(NavigationV1);
MapTo('holafuturospa/components/languagenavigation')(LanguageNavigationV1);


MapTo('holafuturospa/components/tabs')(TabsV1, {isEmpty: TabsV1IsEmptyFn});
MapTo('holafuturospa/components/accordion')(AccordionV1, {isEmpty: AccordionV1IsEmptyFn});
MapTo('holafuturospa/components/carousel')(CarouselV1, {isEmpty: CarouselV1IsEmptyFn});
MapTo('holafuturospa/components/container')(ContainerV1, {isEmpty: ContainerV1IsEmptyFn});

/**
 * Internal custom component Mapping
 */
MapTo('holafuturospa/components/saludo')(Saludo);
MapTo('holafuturospa/components/header')(Header);

//lazy load of internal component (hello world)

/**
 * Default Edit configuration for the Text component that interact with the Core Text component and sub-types
 *
 * @type EditConfig
 */
const TextEditConfig = {
    emptyLabel: 'Text',

    isEmpty: function (props) {
        return !props || !props.text || props.text.trim().length < 1;
    }
};

MapTo('holafuturospa/components/text')(LazyTextComponent, TextEditConfig);