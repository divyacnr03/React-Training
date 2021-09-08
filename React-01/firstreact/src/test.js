export  useCommentsRetriever = (entityId) => {
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);
  
    let handleCommentsSuccessFetch = (comments) => setComments(comments);
  
    let handleError = (error) => setError(error);
  
    useEffect(() => {
      fetchComments(entityId, handleCommentsSuccessFetch, handleError);
    }, []);
  
    return [comments, error];
  };