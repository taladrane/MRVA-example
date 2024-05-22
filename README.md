# Vulnerable function

This repo is intended to be used for a demonstration at the 2024 Microsoft Build conference. There is [intentionally vulnerable code](https://github.com/taladrane/MRVA-example/blob/main/services/sql-get-user-data.js#L3) in here!

From https://docs.github.com/en/code-security/codeql-for-vs-code/getting-started-with-codeql-for-vs-code/running-codeql-queries-at-scale-with-multi-repository-variant-analysis#running-a-query-at-scale-using-mrva :
> With multi-repository variant analysis (MRVA), you can run CodeQL queries on a list of up to 1,000 repositories on GitHub.com from Visual Studio Code. When you run MRVA against a list of repositories, your query is run against each repository that has a CodeQL database available to analyze. GitHub creates and stores the latest CodeQL database for the default branch of thousands of public repositories, including every repository that runs code scanning using CodeQL.

> By default, the "Variant Analysis Repositories" view shows the default lists of the Top 10, Top 100, and Top 1000 public repositories on GitHub.com for the language that you are analyzing.

**Pre-requisites:**
- You need to [enable code scanning using CodeQL on GitHub.com](https://docs.github.com/en/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning-for-a-repository#configuring-code-scanning-automatically), using either default setup or advanced setup, before adding your repository to a list for analysis.
- When you run MRVA, the analysis is run entirely using GitHub Actions. You don't need to create any workflows, but you must specify which GitHub repository the CodeQL for Visual Studio Code extension should use as a controller repository.
