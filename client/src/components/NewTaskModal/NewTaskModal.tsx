import { ChangeEvent, FC, FormEvent, ReactNode, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useTaskContext } from '../../context/taskContext';
import Modal from '../common/Modal';
import {
  CloseButton,
  NewTaskForm,
  SubmitButton,
  TaskNameInput,
  TaskNameLabel
} from './NewTaskModal.styles';

interface ModalProps {
  onClose?: () => void;
  children?: ReactNode;
  statusId: string;
}

interface NewTask {
  name: string;
}

const NewTaskModal: FC<ModalProps> = ({ onClose, statusId }) => {
  const [formData, setFormData] = useState<NewTask>({ name: '' });

  const { addTask } = useTaskContext();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTask = {
      id: uuidv4(),
      title: 'Task 12',
      statusId,
      description: 'new description here',
      priorityId: 1,
      comments: []
    };

    // Handle form submission logic
    console.log('Form submitted', formData);
    addTask(newTask);
    // Close the modal
    if (onClose) onClose();
  };

  return (
    <Modal title="Add new task">
      <NewTaskForm onSubmit={handleSubmit}>
        <TaskNameLabel>
          Task Name:
          <TaskNameInput type="text" name="inputField" onChange={handleInputChange} />
        </TaskNameLabel>
        <SubmitButton type="submit">Submit</SubmitButton>
      </NewTaskForm>
      <CloseButton onClick={onClose}>Close</CloseButton>
    </Modal>
  );
};

export default NewTaskModal;
