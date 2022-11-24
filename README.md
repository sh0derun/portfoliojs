<a name="readme-top"></a>
<br />
<div align="center">

  <h2 align="center"><b>PortfolioGen</b></h2>

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

## Usage

Here are some examples how you can use the command line localy:

To see command line options and usage you can just specify `--help` option:
```sh
portfoliogen --help
Usage: portfoliogen [option=...]

Options:
  -p, --file-path  Set csv file path to process                                           [required]
  -t, --token      Set target token                                   [choices: "BTC", "ETH", "XRP"]
  -d, --date       Set target date, date should be in yyyy-mm-dd format
      --help       Show help 
```

As you see `--file-path` option is required to specify csv file path but the other options are optional.

Lastly this is an example if you provide all options:
```sh
portfoliogen --file-path=./res/transactions.csv --token=BTC --date=2019-10-25
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

The csv file should have following columns
 - timestamp: Integer number of seconds since the Epoch
 - transaction_type: Either a DEPOSIT or a WITHDRAWAL
 - token: The token symbol
 - amount: The amount transacted

You can get csv file `transactions.csv` used in the example from [transactions.csv](https://drive.google.com/file/d/1BjqrYKn4t0k2oq-IWMwC0awZZSsv2HCv/view)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
