import { CardContainer } from './components/card-container.styled';
import { CardParagraphe } from './components/card-paragraphe.styled';
import { CardTitle } from './components/card-title.styled';
import { ImagesCard } from './components/images-card.styled';
import { Box } from './components/box.styled';
import { ButtonContainerCard, ButtonCard } from './components/card-button.styled';
import Desert from '../src/components/images/desert.png'


function App() {
  return (
    <div className="App">
      <Box>
        <CardContainer>
          <ImagesCard src={Desert} />
          <CardTitle>Headline</CardTitle>
          <CardParagraphe>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</CardParagraphe>
          <ButtonContainerCard>
            <ButtonCard button_type={"SeeMore"}>SeeMore</ButtonCard>
            <ButtonCard button_type={"Save"}>Save</ButtonCard>
          </ButtonContainerCard>
        </CardContainer>
      </Box>
    </div>
  );
}

export default App;