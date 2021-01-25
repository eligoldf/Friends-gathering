import UserResponsebleModal from './UserResponsebleModal';
import AddFoodModal from './AddFoodModal';

const modals = {
  userResponseble: UserResponsebleModal,
  addFood: AddFoodModal,
};

export default (modalName) => modals[modalName];
