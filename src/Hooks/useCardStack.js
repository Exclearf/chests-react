import { useState } from "react";  

export const useCardStack = (cardStack) => 
{
    const [currentCardStack, setCurrentCardStack] = useState(cardStack);

    const getTopCard = () => {
        let newCardStack = [...currentCardStack];
        let removedCard = newCardStack.pop();
        setCurrentCardStack([...newCardStack]);
        return removedCard;
    }

    return [currentCardStack, getTopCard]
}