import FloorsDropDown from "../../dropdown/FloorsDropDown"
import { SeatLayout } from "../layout/SeatLayout"


export const SeatBooking = ()=> {

    let items = [
        {
          label: 'Option 1',
          key: '1',
        },
        {
          label: 'Option 2',
          key: '2',
        },
        {
          label: 'Option 3',
          key: '3',
        },
      ];
      


    return (
        <div>
            <FloorsDropDown items={items}></FloorsDropDown>
        </div>
    )
} 