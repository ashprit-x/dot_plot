# Patient Management & Visualisation Tool

## Description

A patient management tool to visualise scans & manage patient data. An entry for the Dot Plot x Tech Academia accelerator programme

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

- Ensure you have [Python](https://www.python.org/downloads/) installed (preferably version 3.7 or higher).
- Ensure you have [Pipenv](https://pipenv.pypa.io/en/latest/install/) installed.
- Ensure you have [Node.js](https://nodejs.org/) installed (preferably version 14 or higher).
- Ensure you have [npm](https://www.npmjs.com/) installed.

### Clone the Repository

1. Open your terminal.
2. Clone the repository by running the following command:

    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    ```

3. Navigate to the project directory:

    ```sh
    cd front-end
    ``` 
    When dealing with the front-end

    ```sh
    cd back-end
    ``` 
    When dealing with the back-end

    & to run files, cd into the folder first:
    ```
    cd folder_name
    python folder_name
    ```

### Set Up the Virtual Environment and Install Dependencies

1. Create a virtual environment and install dependencies:

    ```sh
    pipenv install
    ```

2. Activate the virtual environment:

    ```sh
    pipenv shell
    ```

### Environment Variables

1. Create a `.env` file in the root directory of the project.
2. Add the necessary environment variables to the `.env` file. Example:

    ```env
    PORT_NUMBER=3000
    DATABASE_URL=
    CONNECTION_STRING=

    ```

## Usage

### Running the Application

1. Ensure you are in the virtual environment. If not, activate it:

    ```sh
    pipenv shell
    ```

2. Run the application:

    ```sh
    python path/to/folder/name.py
    ```
    or cd to the folder of the file.

### Additional Commands

- To run database migrations, use:

    ```sh
    python app/core/db_initialiser.py
    ```

    this isn't needed though.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
