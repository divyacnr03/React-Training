export function wrapFetchUser(composedComponent) {
    class App extends React.Component {
        componentDidMount() {
            constructor() {
                super(props);
                this.state = {
                    friends =[],
                    error = {}
                }
            }

            if (this.props.user.loggedIn) {
                axios(`/api/${this.props.user.id}/friends`).then(response => {
                    this.setState({ friends: response.data.friends })
                })
                    .catch(error => setError(error))
    
            }
        }

        render() {
            <ComposedComponent  friends, error/>
        }
    }

    return App;
}


// HOC accpeted a component as input 
// HOC creta another new component with reusebale logic
// Hoc return this new component