import uvicorn


def main():
    uvicorn.run("server.app:app", host="localhost", port=9000, reload=True)


if "__main__" == __name__:
    main()
