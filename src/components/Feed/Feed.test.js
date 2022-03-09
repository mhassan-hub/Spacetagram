import { render, act, fireEvent } from '@testing-library/react';
import Feed from './Feed';

describe("Feed Component", ()=>{
  it("Feed renders without breaking", () => {
    const {getByTestId}= render(<Feed apodList={[]}/>);
    const imageCardUl = getByTestId('image-card-list')
    expect(imageCardUl).toBeTruthy();
  });
  
  it("Check if Feed is empty if apodList is empty", () => {
    const {container } = render(<Feed apodList={[]}/>);
    expect(container.firstChild).toBeEmptyDOMElement();
  });

  it("Check if Feed renders one image card if apodList is of length 1", () => {
    const {container } = render(<Feed apodList={mockApodList}/>);
    expect(container.childElementCount).toBe(1);
  });
})
  
const mockApodList = [{
  copyright:
  "Digitized Sky Survey Processing: Utkarsh Mishra",
  date:
  "2018-12-31",
  explanation:
  "Double, double toil and trouble; Fire burn, and cauldron bubble .... maybe Macbeth should have consulted the Witch Head Nebula. A frighteningly shaped reflection nebula, this cosmic crone is about 800 light-years away though. Its malevolent visage seems to glare toward nearby bright star Rigel in Orion, just off the left edge of this frame. More formally known as IC 2118, the interstellar cloud of dust and gas is nearly 70 light-years across, its dust grains reflecting Rigel's starlight. In this...",
  hdurl:
  "https://apod.nasa.gov/apod/image/1812/WitchHeadNebula_Mishra_2725.jpg",
  media_type:
  "image",
  service_version:
  "v1",
  title:
  "The Witch Head Nebula",
  url:"https://apod.nasa.gov/apod/image/1812/WitchHeadNebula_Mishra_960.jpg",
}]