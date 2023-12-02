import {
  TOGGLE_CHECKBOX_ONE,
  TOGGLE_CHECKBOX_TWO,
  toggleCheckboxOne,
  toggleCheckboxTwo,
} from "./actions";


export interface CheckboxState {
  checkboxOneChecked: boolean;
  checkboxTwoChecked: boolean;
}

const initialState: CheckboxState = {
  checkboxOneChecked: false,
  checkboxTwoChecked: false,
};

type ActionTypes =
  | ReturnType<typeof toggleCheckboxOne>
  | ReturnType<typeof toggleCheckboxTwo>;

const reducer = (state = initialState, action: ActionTypes): CheckboxState => {
  switch (action.type) {
    case TOGGLE_CHECKBOX_ONE:
      return {
        ...state,
        checkboxOneChecked: !state.checkboxOneChecked,
      };
    case TOGGLE_CHECKBOX_TWO:
      return {
        ...state,
        checkboxTwoChecked: !state.checkboxTwoChecked,
      };
    default:
      return state;
  }
};

export default reducer;
