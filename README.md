1. clone the repository

2. npm install

3. run ```node main.js```

4. add additional arguments
    - 1st argument = number to generate key/address combination
    - 2nd argument = address starts with pattern

Example: 

```node main.js 100 1BG```

Result: 

```
key:L55Vnx4HPC6jgRmtFh7GCrvnYb133S6RhS39dYbdmV7y4EtBSwaa
address:1BGC1BbwH2SA9BdSTp62NRVJMYSu7j6Rvb
...
key:L3cVT98mgjL4JNZX5Thqr2JjyS5acntrtHGxR9Xfgw5r518TNQwt
address:1BGkrj1v9rrWuMYa9SfxjBWizEFDij618R
Pattern: 1BG
Total found: 100
Execution time: 8213[ms]
Total searched: 144418
Addresses per second: 17585[K/s]
Performance: 0.0006924344610782589[%]

```