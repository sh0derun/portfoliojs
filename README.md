<a name="readme-top"></a>
<br />
<div align="center">

  <h2 align="center"><b>PortfolioJS</b></h2>

  <p align="center">
    <b>Command Line Portfolio Value Calculator</b>
  </p>
</div>
<br />

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details><br/>
   
## About The Project

Command line tool that takes transactions in csv file and token cryptocurrency type and date, then it returns portfolio value depends on given arguments. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With:

* <b>chalk</b> display colorful text in the console 
* <b>dotenv</b> used to externalize private constants like API keys
* <b>nanospinner</b> used to create spinners in async actions
* <b>node-fetch</b> contains fetch to do http calls
* <b>yargs</b> used to handle command line arguments and options

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

You should have node and npm.

Project was built using these versions:
* node
  ```sh
  node -v
    v16.16.0
  ```

* npm
  ```sh
  npm -v
    8.11.0
  ```

### Installation

1. Get a free API Key at [https://min-api.cryptocompare.com/](https://min-api.cryptocompare.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/sh0derun/portfoliojs.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Rename `.env.example` to `.env` file and put your API key in indicated place:
   ```env
   API_KEY = <PUT_YOUR_API_KEY_HERE>
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Usage

Here are some examples how you can use the command line localy:

To see command line options and usage you can just specify `--help` option:
```sh
node . --help
Usage: portfoliojs [option=...]

Options:
  -p, --file-path  Set csv file path to process                                           [required]
  -t, --token      Set target token                                   [choices: "BTC", "ETH", "XRP"]
  -d, --date       Set target date, date should be in yyyy-mm-dd format
      --help       Show help 
```

As you see `--file-path` option is required to specify csv file path but the other options are optional.

Lastly this is an example if you provide all options:
```sh
node . --file-path=./res/transactions.csv --token=BTC --date=2019-10-25
```

nanospinner will be animated until you get the result:
```sh
⠹ processing transactions.csv ...   
```

this is result:
```sh
✔ latest portfolio value for BTC : 218826.640407
```

Sample from the csv file :
```csv
timestamp,transaction_type,token,amount
1571967208,DEPOSIT,BTC,0.298660
1571967200,DEPOSIT,ETH,0.683640
1571967189,WITHDRAWAL,ETH,0.493839
```

The csv file has the following columns
 - timestamp: Integer number of seconds since the Epoch
 - transaction_type: Either a DEPOSIT or a WITHDRAWAL
 - token: The token symbol
 - amount: The amount transacted

You can get csv file `transactions.csv` used in the example from [transactions.csv](https://s3-ap-southeast-1.amazonaws.com/static.propine.com/transactions.csv.zip) note that it's a very large file, its size is about 1GB.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
