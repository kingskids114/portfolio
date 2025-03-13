import pandas as pd

EXCEL_FILE = "data/database.xlsx"

def load_data(sheet_name: str):
    return pd.read_excel(EXCEL_FILE, sheet_name=sheet_name).to_dict(orient="records")

def save_data(df, sheet_name: str):
    with pd.ExcelWriter(EXCEL_FILE, engine="openpyxl", mode="a", if_sheet_exists="replace") as writer:
        df.to_excel(writer, sheet_name=sheet_name, index=False)
