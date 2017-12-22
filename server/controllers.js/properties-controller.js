let id = 0;

module.exports = {
    getProperties (req, res) {
        const dbInstance = re.app.get('db');

        dbInstance.read_properties()
                  .then( property => res.status(200).send(property) )
                  .catch( err => console.error(err) );
    }
}