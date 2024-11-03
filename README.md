# Kafka Producer and Consumer with Node.js

A simple implementation of Kafka producers and consumers using Node.js, demonstrating how to send and receive messages in a Kafka topic. This project provides a foundational setup to help you understand the basic interactions with Kafka using the `kafkajs` library.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
  - [Creating Topics](#creating-topics)
  - [Running the Producer](#running-the-producer)
  - [Running the Consumer](#running-the-consumer)
- [License](#license)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Docker](https://www.docker.com/) (for running Kafka in a container)

### Starting Kafka Locally

To start Kafka locally using Docker, run the following command:

```bash
docker run -p 9092:9092 apache/kafka:3.7.1
```

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/kafka-producer-consumer-with-nodejs.git
   ```
2. Navigate to the project directory:

   ```bash
   cd kafka-producer-consumer-with-nodejs
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

1. Creating Topics:
   Before running the producer and consumer, create a Kafka topic:

   ```bash
   npm run topic
   ```
2. Running the Producer:
   To run the producer, execute the following command:

   ```bash
   npm run producer
   ```
3. Running the Consumer:
   To run the consumer, execute the following command:

   ```bash
   npm run consumer
   ```

### License

- This project is licensed under the MIT License. See the LICENSE file for details.

### Contributing

- If you would like to contribute to this project, please fork the repository and submit a pull request. Any contributions, improvements, or bug fixes are welcome!

### Acknowledgements

- Apache Kafka for providing the messaging platform.
- kafkajs for the Node.js client used in this project.

### Summary

- Each step is formatted in a consistent manner for clarity.
- You can copy and paste this directly into your `README.md` file.

Let me know if you need anything else!
