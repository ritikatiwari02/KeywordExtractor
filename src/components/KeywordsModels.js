import {
    Text,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    CircularProgress

} from '@chakra-ui/react';


const KeywordsModel =({keywords,loading,isOpen,closeModal })=>{
    return(
        <div>
            <Modal   isOpen={isOpen} onClose={closeModal}>       
              <ModalOverlay/>
              <ModalContent>
                <ModalHeader>
                    Keywords
                </ModalHeader>
                <ModalCloseButton/>
                <ModalBody dispaly='flex' alignItems='center ' justifyContent='center'>
                   {loading?(
                    <CircularProgress isIndeterminate color='blue.300' />
                   ):(
                    <Text>
                        {keywords}
                    </Text>
                   )}
                </ModalBody>
                <ModalBody>
                    <Button colorScheme='blue' mr={3} onClick={closeModal}>

                    </Button>
                </ModalBody>

              </ModalContent>
            </Modal>

        </div>
    )
}
export default KeywordsModel;