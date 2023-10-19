import { useSelector } from 'react-redux';

const useCurrentNode = () => {
    const formData = useSelector((state) => state.main.form);
    const nodes = useSelector((state) => state.main.nodes);
    const currentNode = nodes.find((node) => node.id == formData.id)?.data;

    return currentNode;
}

export default useCurrentNode;