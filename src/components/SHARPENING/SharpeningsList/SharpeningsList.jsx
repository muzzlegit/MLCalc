//IMAGES
import commonImg from '../../../img/common/CommonAssets.png'
//DATA
import commonAssets from '../../../data/CommonAssets.json'
//STYLES
import { SharpeningImg, SharpeningBox, SharpeningItem, SharpeningButton } from './styles/SharpeningsList.styled';


export default function SharpeningsList({ sharpeningsList, removeFromSharpeningsList }) {
  
  return(
    <SharpeningBox>
      {
        sharpeningsList.map( sharpening => {
          return(
            <SharpeningItem
              key = { sharpening.id }
              
            >
              <SharpeningImg
                title = { sharpening.description }
                background = { `url(${ commonImg }) ${ commonAssets[ sharpening.name ] }` }
              ></SharpeningImg>
              <p
                title = { sharpening.description }
              >{ sharpening.name }</p>
              <p>
                { sharpening.value > 0 && <span>+</span> }
                { sharpening.measure === "%" ? sharpening.value * 100 : sharpening.value }
                {sharpening.measure === "%" && <span>%</span>}
              </p>
              <SharpeningButton
                type = "button"
                id = { sharpening.id }
                onClick = { removeFromSharpeningsList }
                title = "Удаляет заточку ТОЛЬКО из списка, не из артефакта!"
              >Удалить</SharpeningButton>
            </SharpeningItem>
          )
        })
      }
    </SharpeningBox>
  );
}