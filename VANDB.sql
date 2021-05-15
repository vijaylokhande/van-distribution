--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: APP_CONFIG; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."APP_CONFIG" (
    "PROPERTY_ID" integer NOT NULL,
    "PROPERTY_TYPE" character varying(20) NOT NULL,
    "PROPERTY_VALUE" character varying(20) NOT NULL,
    "ACTIVE_STATUS" boolean DEFAULT true NOT NULL
);


ALTER TABLE public."APP_CONFIG" OWNER TO postgres;

--
-- Name: APP_CONFIG_PROPERTY_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."APP_CONFIG_PROPERTY_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."APP_CONFIG_PROPERTY_ID_seq" OWNER TO postgres;

--
-- Name: APP_CONFIG_PROPERTY_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."APP_CONFIG_PROPERTY_ID_seq" OWNED BY public."APP_CONFIG"."PROPERTY_ID";


--
-- Name: BILL_DETAILS; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."BILL_DETAILS" (
    "BILL_DETAILS_ID" integer NOT NULL,
    "BD_BILL_MAINS_ID" integer NOT NULL,
    "BD_PRODUCT_ID" integer NOT NULL,
    "BD_PRODUCT_QUANTITY" numeric NOT NULL,
    "BD_RATE" numeric NOT NULL,
    "BD_TOTAL" numeric NOT NULL,
    "DISCOUNT_PER" numeric DEFAULT 0,
    "DISCOUNT_AMOUNT" numeric DEFAULT 0,
    "BD_TAXABLE_AMOUNT" numeric NOT NULL,
    "BD_CGST_PER" numeric DEFAULT 0,
    "BD_CGST_AMOUNT" numeric DEFAULT 0,
    "BD_SGST_PER" numeric DEFAULT 0,
    "BD_SGST_AMOUNT" numeric DEFAULT 0,
    "TOTAL_AMOUNT" numeric NOT NULL
);


ALTER TABLE public."BILL_DETAILS" OWNER TO postgres;

--
-- Name: BILL_DETAILS_BILL_DETAILS_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."BILL_DETAILS_BILL_DETAILS_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."BILL_DETAILS_BILL_DETAILS_ID_seq" OWNER TO postgres;

--
-- Name: BILL_DETAILS_BILL_DETAILS_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."BILL_DETAILS_BILL_DETAILS_ID_seq" OWNED BY public."BILL_DETAILS"."BILL_DETAILS_ID";


--
-- Name: BILL_MAINS; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."BILL_MAINS" (
    "BILL_MAINS_ID" integer NOT NULL,
    "BILL_NUMBER" character varying(20) NOT NULL,
    "BILL_SHIP_ID" integer NOT NULL,
    "BILL_CUST_ID" integer NOT NULL,
    "BILL_DATE" date NOT NULL,
    "BILL_TIME" time without time zone NOT NULL,
    "TAXABLE_AMOUNT" numeric NOT NULL,
    "CGST_PER" numeric DEFAULT 0,
    "CGST_AMOUNT" numeric DEFAULT 0,
    "SGST_PER" numeric DEFAULT 0,
    "SGST_AMOUNT" numeric DEFAULT 0,
    "TOTAL_GST_AMOUNT" numeric DEFAULT 0,
    "TOTAL_BILL_AMOUNT" numeric NOT NULL,
    "REMARK" character varying(50)
);


ALTER TABLE public."BILL_MAINS" OWNER TO postgres;

--
-- Name: BILL_MAINS_BILL_MAINS_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."BILL_MAINS_BILL_MAINS_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."BILL_MAINS_BILL_MAINS_ID_seq" OWNER TO postgres;

--
-- Name: BILL_MAINS_BILL_MAINS_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."BILL_MAINS_BILL_MAINS_ID_seq" OWNED BY public."BILL_MAINS"."BILL_MAINS_ID";


--
-- Name: CUSTOMER_DETAILS; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."CUSTOMER_DETAILS" (
    "CUST_ID" integer NOT NULL,
    "CUST_NAME" character varying(20) NOT NULL,
    "SHOP_NAME" character varying(20),
    "CUST_CONTACT" character varying(50) NOT NULL,
    "CUST_GST_NO" character varying(20),
    "CUST_ADDRESS" character varying(200) NOT NULL,
    "OUTSTANDING" numeric DEFAULT 0 NOT NULL,
    "CUST_DOB" date,
    "ACTIVE_STATUS" boolean DEFAULT true NOT NULL
);


ALTER TABLE public."CUSTOMER_DETAILS" OWNER TO postgres;

--
-- Name: CUSTOMER_DETAILS_CUST_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."CUSTOMER_DETAILS_CUST_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."CUSTOMER_DETAILS_CUST_ID_seq" OWNER TO postgres;

--
-- Name: CUSTOMER_DETAILS_CUST_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."CUSTOMER_DETAILS_CUST_ID_seq" OWNED BY public."CUSTOMER_DETAILS"."CUST_ID";


--
-- Name: EMPLOYEE; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."EMPLOYEE" (
    "EMP_ID" integer NOT NULL,
    "EMP_NAME" character varying(20) NOT NULL,
    "EMP_CONTACT" character varying(50) NOT NULL,
    "EMP_ADDRESS" character varying(200) NOT NULL,
    "DESIGNATION_ID" integer NOT NULL,
    "EMP_WAREHOUSE_ID" integer NOT NULL,
    "ID_PROOF_TYPE" integer DEFAULT '-1'::integer,
    "ID_PROOF_DETAILS" character varying(50),
    "EMP_DOB" date,
    "ACTIVE_STATUS" boolean DEFAULT true NOT NULL
);


ALTER TABLE public."EMPLOYEE" OWNER TO postgres;

--
-- Name: EMPLOYEE_EMP_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."EMPLOYEE_EMP_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."EMPLOYEE_EMP_ID_seq" OWNER TO postgres;

--
-- Name: EMPLOYEE_EMP_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."EMPLOYEE_EMP_ID_seq" OWNED BY public."EMPLOYEE"."EMP_ID";


--
-- Name: EMP_LOGIN; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."EMP_LOGIN" (
    "EMP_LOGIN_ID" integer NOT NULL,
    "LOGIN_DETAILS_EMP_ID" integer NOT NULL,
    "EMP_USERNAME" character varying(20) NOT NULL,
    "EMP_PASSWORD" character varying(20) NOT NULL,
    "CREATED_DATE" date NOT NULL,
    "CREATED_TIME" time without time zone NOT NULL,
    "UPDATE_DATE" date NOT NULL,
    "UPDATE_TIME" time without time zone NOT NULL,
    "ACTIVE_STATUS" boolean DEFAULT true NOT NULL
);


ALTER TABLE public."EMP_LOGIN" OWNER TO postgres;

--
-- Name: EMP_LOGIN_EMP_LOGIN_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."EMP_LOGIN_EMP_LOGIN_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."EMP_LOGIN_EMP_LOGIN_ID_seq" OWNER TO postgres;

--
-- Name: EMP_LOGIN_EMP_LOGIN_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."EMP_LOGIN_EMP_LOGIN_ID_seq" OWNED BY public."EMP_LOGIN"."EMP_LOGIN_ID";


--
-- Name: PAYMENTS; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."PAYMENTS" (
    "PAYMENT_ID" integer NOT NULL,
    "PAYMENT_CUST_ID" integer NOT NULL,
    "RECEIVER_EMP_ID" integer NOT NULL,
    "PAYMENT_DATE" date NOT NULL,
    "PAYMENT_TIME" time without time zone NOT NULL,
    "AMOUNT" numeric NOT NULL,
    "PAYMENT_MODE" integer NOT NULL,
    "REMARK" character varying(99)
);


ALTER TABLE public."PAYMENTS" OWNER TO postgres;

--
-- Name: PAYMENTS_PAYMENT_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."PAYMENTS_PAYMENT_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."PAYMENTS_PAYMENT_ID_seq" OWNER TO postgres;

--
-- Name: PAYMENTS_PAYMENT_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."PAYMENTS_PAYMENT_ID_seq" OWNED BY public."PAYMENTS"."PAYMENT_ID";


--
-- Name: PRODUCT_DETAILS; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."PRODUCT_DETAILS" (
    "PRODUCT_ID" integer NOT NULL,
    "PRODUCT_CODE" character varying(20),
    "PRODUCT_NAME" character varying(25) NOT NULL,
    "HSN_CODE" character varying(25),
    "PRODUCT_DESC" character varying(50),
    "PROD_COMPANY_ID" integer NOT NULL,
    "PROD_UNIT_ID" integer NOT NULL,
    "PROD_UNIT_QUANTITY" numeric DEFAULT 1 NOT NULL,
    "PRODUCT_MRP" double precision,
    "PROD_CGST_PER" numeric DEFAULT 0 NOT NULL,
    "PROD_SGST_PER" numeric DEFAULT 0 NOT NULL,
    "ACTIVE_STATUS" boolean DEFAULT true NOT NULL,
    "PRODUCT_RATE" json NOT NULL
);


ALTER TABLE public."PRODUCT_DETAILS" OWNER TO postgres;

--
-- Name: PRODUCT_DETAILS_PRODUCT_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."PRODUCT_DETAILS_PRODUCT_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."PRODUCT_DETAILS_PRODUCT_ID_seq" OWNER TO postgres;

--
-- Name: PRODUCT_DETAILS_PRODUCT_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."PRODUCT_DETAILS_PRODUCT_ID_seq" OWNED BY public."PRODUCT_DETAILS"."PRODUCT_ID";


--
-- Name: PRODUCT_SHIPMENT; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."PRODUCT_SHIPMENT" (
    "PS_ID" integer NOT NULL,
    "PS_PRODUCT_ID" integer NOT NULL,
    "PS_PRODUCT_QUANTITY" numeric NOT NULL,
    "PS_SHIPMENT_ID" integer NOT NULL,
    "PS_DATE" date NOT NULL,
    "PS_TIME" time without time zone NOT NULL,
    "PS_STATUS" integer NOT NULL
);


ALTER TABLE public."PRODUCT_SHIPMENT" OWNER TO postgres;

--
-- Name: PRODUCT_SHIPMENT_PS_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."PRODUCT_SHIPMENT_PS_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."PRODUCT_SHIPMENT_PS_ID_seq" OWNER TO postgres;

--
-- Name: PRODUCT_SHIPMENT_PS_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."PRODUCT_SHIPMENT_PS_ID_seq" OWNED BY public."PRODUCT_SHIPMENT"."PS_ID";


--
-- Name: SHIPMENT; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SHIPMENT" (
    "SHIP_ID" integer NOT NULL,
    "SHIP_DATE" date NOT NULL,
    "SHIP_TIME" time without time zone NOT NULL,
    "SHIP_VAN_ID" integer NOT NULL,
    "SHIP_EMP_ID" integer NOT NULL,
    "SHIP_WAREHOUSE_ID" integer NOT NULL,
    "SHIP_STATUS" integer NOT NULL
);


ALTER TABLE public."SHIPMENT" OWNER TO postgres;

--
-- Name: SHIPMENT_SHIP_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."SHIPMENT_SHIP_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."SHIPMENT_SHIP_ID_seq" OWNER TO postgres;

--
-- Name: SHIPMENT_SHIP_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."SHIPMENT_SHIP_ID_seq" OWNED BY public."SHIPMENT"."SHIP_ID";


--
-- Name: VAN_DETAILS; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."VAN_DETAILS" (
    "VAN_ID" integer NOT NULL,
    "VAN_NUMBER" character varying(10) NOT NULL,
    "VAN_NAME" character varying(20),
    "ACTIVE_STATUS" boolean DEFAULT true NOT NULL
);


ALTER TABLE public."VAN_DETAILS" OWNER TO postgres;

--
-- Name: VAN_DETAILS_VAN_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."VAN_DETAILS_VAN_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."VAN_DETAILS_VAN_ID_seq" OWNER TO postgres;

--
-- Name: VAN_DETAILS_VAN_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."VAN_DETAILS_VAN_ID_seq" OWNED BY public."VAN_DETAILS"."VAN_ID";


--
-- Name: WAREHOUSE_DETAILS; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."WAREHOUSE_DETAILS" (
    "WAREHOUSE_ID" integer NOT NULL,
    "WAREHOUSE_NAME" character varying(20) NOT NULL,
    "WAREHOUSE_ADDRESS" character varying(200),
    "WAREHOUSE_CONTACT" character varying(50),
    "ACTIVE_STATUS" boolean DEFAULT true NOT NULL
);


ALTER TABLE public."WAREHOUSE_DETAILS" OWNER TO postgres;

--
-- Name: WAREHOUSE_DETAILS_WAREHOUSE_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."WAREHOUSE_DETAILS_WAREHOUSE_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."WAREHOUSE_DETAILS_WAREHOUSE_ID_seq" OWNER TO postgres;

--
-- Name: WAREHOUSE_DETAILS_WAREHOUSE_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."WAREHOUSE_DETAILS_WAREHOUSE_ID_seq" OWNED BY public."WAREHOUSE_DETAILS"."WAREHOUSE_ID";


--
-- Name: WAREHOUSE_PRODUCT_ENTRY; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."WAREHOUSE_PRODUCT_ENTRY" (
    "WPE_ID" integer NOT NULL,
    "WPE_WAREHOUSE_ID" integer NOT NULL,
    "WPE_PRODUCT_ID" integer NOT NULL,
    "WPE_PRODUCT_QUANTITY" numeric NOT NULL,
    "ENTRY_DATE" date NOT NULL,
    "ENTRY_TIME" time without time zone NOT NULL,
    "RECEIVED_BY_EMP_ID" integer NOT NULL,
    "ENTRY_STATUS" integer NOT NULL
);


ALTER TABLE public."WAREHOUSE_PRODUCT_ENTRY" OWNER TO postgres;

--
-- Name: WAREHOUSE_PRODUCT_ENTRY_WPE_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."WAREHOUSE_PRODUCT_ENTRY_WPE_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."WAREHOUSE_PRODUCT_ENTRY_WPE_ID_seq" OWNER TO postgres;

--
-- Name: WAREHOUSE_PRODUCT_ENTRY_WPE_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."WAREHOUSE_PRODUCT_ENTRY_WPE_ID_seq" OWNED BY public."WAREHOUSE_PRODUCT_ENTRY"."WPE_ID";


--
-- Name: WAREHOUSE_PRODUCT_STOCK; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."WAREHOUSE_PRODUCT_STOCK" (
    "SKU_ID" integer NOT NULL,
    "WPS_PRODUCT_ID" integer NOT NULL,
    "WPS_PRODUCT_QUANTITY" numeric DEFAULT 0 NOT NULL,
    "RACK_NUMBER" character varying(20),
    "CREATED_DATE" date NOT NULL,
    "CREATED_TIME" time without time zone NOT NULL,
    "UPDATED_DATE" date NOT NULL,
    "UPDATED_TIME" time without time zone NOT NULL,
    "ACTIVE_STATUS" boolean DEFAULT true NOT NULL
);


ALTER TABLE public."WAREHOUSE_PRODUCT_STOCK" OWNER TO postgres;

--
-- Name: WAREHOUSE_PRODUCT_STOCK_SKU_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."WAREHOUSE_PRODUCT_STOCK_SKU_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."WAREHOUSE_PRODUCT_STOCK_SKU_ID_seq" OWNER TO postgres;

--
-- Name: WAREHOUSE_PRODUCT_STOCK_SKU_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."WAREHOUSE_PRODUCT_STOCK_SKU_ID_seq" OWNED BY public."WAREHOUSE_PRODUCT_STOCK"."SKU_ID";


--
-- Name: APP_CONFIG PROPERTY_ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."APP_CONFIG" ALTER COLUMN "PROPERTY_ID" SET DEFAULT nextval('public."APP_CONFIG_PROPERTY_ID_seq"'::regclass);


--
-- Name: BILL_DETAILS BILL_DETAILS_ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BILL_DETAILS" ALTER COLUMN "BILL_DETAILS_ID" SET DEFAULT nextval('public."BILL_DETAILS_BILL_DETAILS_ID_seq"'::regclass);


--
-- Name: BILL_MAINS BILL_MAINS_ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BILL_MAINS" ALTER COLUMN "BILL_MAINS_ID" SET DEFAULT nextval('public."BILL_MAINS_BILL_MAINS_ID_seq"'::regclass);


--
-- Name: CUSTOMER_DETAILS CUST_ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CUSTOMER_DETAILS" ALTER COLUMN "CUST_ID" SET DEFAULT nextval('public."CUSTOMER_DETAILS_CUST_ID_seq"'::regclass);


--
-- Name: EMPLOYEE EMP_ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."EMPLOYEE" ALTER COLUMN "EMP_ID" SET DEFAULT nextval('public."EMPLOYEE_EMP_ID_seq"'::regclass);


--
-- Name: EMP_LOGIN EMP_LOGIN_ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."EMP_LOGIN" ALTER COLUMN "EMP_LOGIN_ID" SET DEFAULT nextval('public."EMP_LOGIN_EMP_LOGIN_ID_seq"'::regclass);


--
-- Name: PAYMENTS PAYMENT_ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PAYMENTS" ALTER COLUMN "PAYMENT_ID" SET DEFAULT nextval('public."PAYMENTS_PAYMENT_ID_seq"'::regclass);


--
-- Name: PRODUCT_DETAILS PRODUCT_ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PRODUCT_DETAILS" ALTER COLUMN "PRODUCT_ID" SET DEFAULT nextval('public."PRODUCT_DETAILS_PRODUCT_ID_seq"'::regclass);


--
-- Name: PRODUCT_SHIPMENT PS_ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PRODUCT_SHIPMENT" ALTER COLUMN "PS_ID" SET DEFAULT nextval('public."PRODUCT_SHIPMENT_PS_ID_seq"'::regclass);


--
-- Name: SHIPMENT SHIP_ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SHIPMENT" ALTER COLUMN "SHIP_ID" SET DEFAULT nextval('public."SHIPMENT_SHIP_ID_seq"'::regclass);


--
-- Name: VAN_DETAILS VAN_ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."VAN_DETAILS" ALTER COLUMN "VAN_ID" SET DEFAULT nextval('public."VAN_DETAILS_VAN_ID_seq"'::regclass);


--
-- Name: WAREHOUSE_DETAILS WAREHOUSE_ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."WAREHOUSE_DETAILS" ALTER COLUMN "WAREHOUSE_ID" SET DEFAULT nextval('public."WAREHOUSE_DETAILS_WAREHOUSE_ID_seq"'::regclass);


--
-- Name: WAREHOUSE_PRODUCT_ENTRY WPE_ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."WAREHOUSE_PRODUCT_ENTRY" ALTER COLUMN "WPE_ID" SET DEFAULT nextval('public."WAREHOUSE_PRODUCT_ENTRY_WPE_ID_seq"'::regclass);


--
-- Name: WAREHOUSE_PRODUCT_STOCK SKU_ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."WAREHOUSE_PRODUCT_STOCK" ALTER COLUMN "SKU_ID" SET DEFAULT nextval('public."WAREHOUSE_PRODUCT_STOCK_SKU_ID_seq"'::regclass);


--
-- Data for Name: APP_CONFIG; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."APP_CONFIG" ("PROPERTY_ID", "PROPERTY_TYPE", "PROPERTY_VALUE", "ACTIVE_STATUS") FROM stdin;
1	PRODUCT_COMPANY	ONE	t
2	PRODUCT_COMPANY	TWO	t
3	PRODUCT_UNIT	KG	t
4	PRODUCT_UNIT	GM	t
5	PRODUCT_UNIT	LTR	t
6	PRODUCT_UNIT	MTR	f
7	PRODUCT_UNIT	DOZEN	t
\.


--
-- Data for Name: BILL_DETAILS; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."BILL_DETAILS" ("BILL_DETAILS_ID", "BD_BILL_MAINS_ID", "BD_PRODUCT_ID", "BD_PRODUCT_QUANTITY", "BD_RATE", "BD_TOTAL", "DISCOUNT_PER", "DISCOUNT_AMOUNT", "BD_TAXABLE_AMOUNT", "BD_CGST_PER", "BD_CGST_AMOUNT", "BD_SGST_PER", "BD_SGST_AMOUNT", "TOTAL_AMOUNT") FROM stdin;
\.


--
-- Data for Name: BILL_MAINS; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."BILL_MAINS" ("BILL_MAINS_ID", "BILL_NUMBER", "BILL_SHIP_ID", "BILL_CUST_ID", "BILL_DATE", "BILL_TIME", "TAXABLE_AMOUNT", "CGST_PER", "CGST_AMOUNT", "SGST_PER", "SGST_AMOUNT", "TOTAL_GST_AMOUNT", "TOTAL_BILL_AMOUNT", "REMARK") FROM stdin;
\.


--
-- Data for Name: CUSTOMER_DETAILS; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."CUSTOMER_DETAILS" ("CUST_ID", "CUST_NAME", "SHOP_NAME", "CUST_CONTACT", "CUST_GST_NO", "CUST_ADDRESS", "OUTSTANDING", "CUST_DOB", "ACTIVE_STATUS") FROM stdin;
\.


--
-- Data for Name: EMPLOYEE; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."EMPLOYEE" ("EMP_ID", "EMP_NAME", "EMP_CONTACT", "EMP_ADDRESS", "DESIGNATION_ID", "EMP_WAREHOUSE_ID", "ID_PROOF_TYPE", "ID_PROOF_DETAILS", "EMP_DOB", "ACTIVE_STATUS") FROM stdin;
\.


--
-- Data for Name: EMP_LOGIN; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."EMP_LOGIN" ("EMP_LOGIN_ID", "LOGIN_DETAILS_EMP_ID", "EMP_USERNAME", "EMP_PASSWORD", "CREATED_DATE", "CREATED_TIME", "UPDATE_DATE", "UPDATE_TIME", "ACTIVE_STATUS") FROM stdin;
\.


--
-- Data for Name: PAYMENTS; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."PAYMENTS" ("PAYMENT_ID", "PAYMENT_CUST_ID", "RECEIVER_EMP_ID", "PAYMENT_DATE", "PAYMENT_TIME", "AMOUNT", "PAYMENT_MODE", "REMARK") FROM stdin;
\.


--
-- Data for Name: PRODUCT_DETAILS; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."PRODUCT_DETAILS" ("PRODUCT_ID", "PRODUCT_CODE", "PRODUCT_NAME", "HSN_CODE", "PRODUCT_DESC", "PROD_COMPANY_ID", "PROD_UNIT_ID", "PROD_UNIT_QUANTITY", "PRODUCT_MRP", "PROD_CGST_PER", "PROD_SGST_PER", "ACTIVE_STATUS", "PRODUCT_RATE") FROM stdin;
\.


--
-- Data for Name: PRODUCT_SHIPMENT; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."PRODUCT_SHIPMENT" ("PS_ID", "PS_PRODUCT_ID", "PS_PRODUCT_QUANTITY", "PS_SHIPMENT_ID", "PS_DATE", "PS_TIME", "PS_STATUS") FROM stdin;
\.


--
-- Data for Name: SHIPMENT; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SHIPMENT" ("SHIP_ID", "SHIP_DATE", "SHIP_TIME", "SHIP_VAN_ID", "SHIP_EMP_ID", "SHIP_WAREHOUSE_ID", "SHIP_STATUS") FROM stdin;
\.


--
-- Data for Name: VAN_DETAILS; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."VAN_DETAILS" ("VAN_ID", "VAN_NUMBER", "VAN_NAME", "ACTIVE_STATUS") FROM stdin;
\.


--
-- Data for Name: WAREHOUSE_DETAILS; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."WAREHOUSE_DETAILS" ("WAREHOUSE_ID", "WAREHOUSE_NAME", "WAREHOUSE_ADDRESS", "WAREHOUSE_CONTACT", "ACTIVE_STATUS") FROM stdin;
\.


--
-- Data for Name: WAREHOUSE_PRODUCT_ENTRY; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."WAREHOUSE_PRODUCT_ENTRY" ("WPE_ID", "WPE_WAREHOUSE_ID", "WPE_PRODUCT_ID", "WPE_PRODUCT_QUANTITY", "ENTRY_DATE", "ENTRY_TIME", "RECEIVED_BY_EMP_ID", "ENTRY_STATUS") FROM stdin;
\.


--
-- Data for Name: WAREHOUSE_PRODUCT_STOCK; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."WAREHOUSE_PRODUCT_STOCK" ("SKU_ID", "WPS_PRODUCT_ID", "WPS_PRODUCT_QUANTITY", "RACK_NUMBER", "CREATED_DATE", "CREATED_TIME", "UPDATED_DATE", "UPDATED_TIME", "ACTIVE_STATUS") FROM stdin;
\.


--
-- Name: APP_CONFIG_PROPERTY_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."APP_CONFIG_PROPERTY_ID_seq"', 5, true);


--
-- Name: BILL_DETAILS_BILL_DETAILS_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."BILL_DETAILS_BILL_DETAILS_ID_seq"', 1, false);


--
-- Name: BILL_MAINS_BILL_MAINS_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."BILL_MAINS_BILL_MAINS_ID_seq"', 1, false);


--
-- Name: CUSTOMER_DETAILS_CUST_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."CUSTOMER_DETAILS_CUST_ID_seq"', 1, false);


--
-- Name: EMPLOYEE_EMP_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."EMPLOYEE_EMP_ID_seq"', 1, false);


--
-- Name: EMP_LOGIN_EMP_LOGIN_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."EMP_LOGIN_EMP_LOGIN_ID_seq"', 1, false);


--
-- Name: PAYMENTS_PAYMENT_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."PAYMENTS_PAYMENT_ID_seq"', 1, false);


--
-- Name: PRODUCT_DETAILS_PRODUCT_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."PRODUCT_DETAILS_PRODUCT_ID_seq"', 1, false);


--
-- Name: PRODUCT_SHIPMENT_PS_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."PRODUCT_SHIPMENT_PS_ID_seq"', 1, false);


--
-- Name: SHIPMENT_SHIP_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."SHIPMENT_SHIP_ID_seq"', 1, false);


--
-- Name: VAN_DETAILS_VAN_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."VAN_DETAILS_VAN_ID_seq"', 1, false);


--
-- Name: WAREHOUSE_DETAILS_WAREHOUSE_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."WAREHOUSE_DETAILS_WAREHOUSE_ID_seq"', 1, false);


--
-- Name: WAREHOUSE_PRODUCT_ENTRY_WPE_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."WAREHOUSE_PRODUCT_ENTRY_WPE_ID_seq"', 1, false);


--
-- Name: WAREHOUSE_PRODUCT_STOCK_SKU_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."WAREHOUSE_PRODUCT_STOCK_SKU_ID_seq"', 1, false);


--
-- Name: APP_CONFIG APP_CONFIG_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."APP_CONFIG"
    ADD CONSTRAINT "APP_CONFIG_pkey" PRIMARY KEY ("PROPERTY_ID");


--
-- Name: BILL_DETAILS BILL_DETAILS_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BILL_DETAILS"
    ADD CONSTRAINT "BILL_DETAILS_pkey" PRIMARY KEY ("BILL_DETAILS_ID");


--
-- Name: BILL_MAINS BILL_MAINS_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BILL_MAINS"
    ADD CONSTRAINT "BILL_MAINS_pkey" PRIMARY KEY ("BILL_MAINS_ID");


--
-- Name: CUSTOMER_DETAILS CUSTOMER_DETAILS_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CUSTOMER_DETAILS"
    ADD CONSTRAINT "CUSTOMER_DETAILS_pkey" PRIMARY KEY ("CUST_ID");


--
-- Name: EMPLOYEE EMPLOYEE_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."EMPLOYEE"
    ADD CONSTRAINT "EMPLOYEE_pkey" PRIMARY KEY ("EMP_ID");


--
-- Name: EMP_LOGIN EMP_LOGIN_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."EMP_LOGIN"
    ADD CONSTRAINT "EMP_LOGIN_pkey" PRIMARY KEY ("EMP_LOGIN_ID");


--
-- Name: PAYMENTS PAYMENTS_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PAYMENTS"
    ADD CONSTRAINT "PAYMENTS_pkey" PRIMARY KEY ("PAYMENT_ID");


--
-- Name: PRODUCT_DETAILS PRODUCT_DETAILS_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PRODUCT_DETAILS"
    ADD CONSTRAINT "PRODUCT_DETAILS_pkey" PRIMARY KEY ("PRODUCT_ID");


--
-- Name: PRODUCT_SHIPMENT PRODUCT_SHIPMENT_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PRODUCT_SHIPMENT"
    ADD CONSTRAINT "PRODUCT_SHIPMENT_pkey" PRIMARY KEY ("PS_ID");


--
-- Name: SHIPMENT SHIPMENT_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SHIPMENT"
    ADD CONSTRAINT "SHIPMENT_pkey" PRIMARY KEY ("SHIP_ID");


--
-- Name: VAN_DETAILS VAN_DETAILS_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."VAN_DETAILS"
    ADD CONSTRAINT "VAN_DETAILS_pkey" PRIMARY KEY ("VAN_ID");


--
-- Name: WAREHOUSE_DETAILS WAREHOUSE_DETAILS_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."WAREHOUSE_DETAILS"
    ADD CONSTRAINT "WAREHOUSE_DETAILS_pkey" PRIMARY KEY ("WAREHOUSE_ID");


--
-- Name: WAREHOUSE_PRODUCT_ENTRY WAREHOUSE_PRODUCT_ENTRY_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."WAREHOUSE_PRODUCT_ENTRY"
    ADD CONSTRAINT "WAREHOUSE_PRODUCT_ENTRY_pkey" PRIMARY KEY ("WPE_ID");


--
-- Name: WAREHOUSE_PRODUCT_STOCK WAREHOUSE_PRODUCT_STOCK_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."WAREHOUSE_PRODUCT_STOCK"
    ADD CONSTRAINT "WAREHOUSE_PRODUCT_STOCK_pkey" PRIMARY KEY ("SKU_ID");


--
-- Name: BILL_DETAILS BILL_DETAILS_BD_BILL_MAINS_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BILL_DETAILS"
    ADD CONSTRAINT "BILL_DETAILS_BD_BILL_MAINS_ID_fkey" FOREIGN KEY ("BD_BILL_MAINS_ID") REFERENCES public."BILL_MAINS"("BILL_MAINS_ID") ON UPDATE CASCADE ON DELETE RESTRICT NOT VALID;


--
-- Name: BILL_DETAILS BILL_DETAILS_BD_PRODUCT_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BILL_DETAILS"
    ADD CONSTRAINT "BILL_DETAILS_BD_PRODUCT_ID_fkey" FOREIGN KEY ("BD_PRODUCT_ID") REFERENCES public."PRODUCT_DETAILS"("PRODUCT_ID") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: BILL_MAINS BILL_MAINS_BILL_CUST_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BILL_MAINS"
    ADD CONSTRAINT "BILL_MAINS_BILL_CUST_ID_fkey" FOREIGN KEY ("BILL_CUST_ID") REFERENCES public."CUSTOMER_DETAILS"("CUST_ID") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: BILL_MAINS BILL_MAINS_BILL_SHIP_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BILL_MAINS"
    ADD CONSTRAINT "BILL_MAINS_BILL_SHIP_ID_fkey" FOREIGN KEY ("BILL_SHIP_ID") REFERENCES public."SHIPMENT"("SHIP_ID") ON UPDATE CASCADE ON DELETE RESTRICT NOT VALID;


--
-- Name: EMPLOYEE EMPLOYEE_DESIGNATION_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."EMPLOYEE"
    ADD CONSTRAINT "EMPLOYEE_DESIGNATION_ID_fkey" FOREIGN KEY ("DESIGNATION_ID") REFERENCES public."APP_CONFIG"("PROPERTY_ID") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: EMPLOYEE EMPLOYEE_EMP_WAREHOUSE_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."EMPLOYEE"
    ADD CONSTRAINT "EMPLOYEE_EMP_WAREHOUSE_ID_fkey" FOREIGN KEY ("EMP_WAREHOUSE_ID") REFERENCES public."WAREHOUSE_DETAILS"("WAREHOUSE_ID") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: EMPLOYEE EMPLOYEE_ID_PROOF_TYPE_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."EMPLOYEE"
    ADD CONSTRAINT "EMPLOYEE_ID_PROOF_TYPE_fkey" FOREIGN KEY ("ID_PROOF_TYPE") REFERENCES public."APP_CONFIG"("PROPERTY_ID") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: EMP_LOGIN EMP_LOGIN_LOGIN_DETAILS_EMP_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."EMP_LOGIN"
    ADD CONSTRAINT "EMP_LOGIN_LOGIN_DETAILS_EMP_ID_fkey" FOREIGN KEY ("LOGIN_DETAILS_EMP_ID") REFERENCES public."EMPLOYEE"("EMP_ID") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: PAYMENTS PAYMENTS_PAYMENT_CUST_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PAYMENTS"
    ADD CONSTRAINT "PAYMENTS_PAYMENT_CUST_ID_fkey" FOREIGN KEY ("PAYMENT_CUST_ID") REFERENCES public."CUSTOMER_DETAILS"("CUST_ID") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: PAYMENTS PAYMENTS_PAYMENT_MODE_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PAYMENTS"
    ADD CONSTRAINT "PAYMENTS_PAYMENT_MODE_fkey" FOREIGN KEY ("PAYMENT_MODE") REFERENCES public."APP_CONFIG"("PROPERTY_ID") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: PAYMENTS PAYMENTS_RECEIVER_EMP_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PAYMENTS"
    ADD CONSTRAINT "PAYMENTS_RECEIVER_EMP_ID_fkey" FOREIGN KEY ("RECEIVER_EMP_ID") REFERENCES public."EMPLOYEE"("EMP_ID") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: PRODUCT_DETAILS PRODUCT_DETAILS_PROD_COMPANY_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PRODUCT_DETAILS"
    ADD CONSTRAINT "PRODUCT_DETAILS_PROD_COMPANY_ID_fkey" FOREIGN KEY ("PROD_COMPANY_ID") REFERENCES public."APP_CONFIG"("PROPERTY_ID") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: PRODUCT_DETAILS PRODUCT_DETAILS_PROD_UNIT_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PRODUCT_DETAILS"
    ADD CONSTRAINT "PRODUCT_DETAILS_PROD_UNIT_ID_fkey" FOREIGN KEY ("PROD_UNIT_ID") REFERENCES public."APP_CONFIG"("PROPERTY_ID") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: PRODUCT_SHIPMENT PRODUCT_SHIPMENT_PS_PRODUCT_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PRODUCT_SHIPMENT"
    ADD CONSTRAINT "PRODUCT_SHIPMENT_PS_PRODUCT_ID_fkey" FOREIGN KEY ("PS_PRODUCT_ID") REFERENCES public."PRODUCT_DETAILS"("PRODUCT_ID") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: PRODUCT_SHIPMENT PRODUCT_SHIPMENT_PS_SHIPMENT_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PRODUCT_SHIPMENT"
    ADD CONSTRAINT "PRODUCT_SHIPMENT_PS_SHIPMENT_ID_fkey" FOREIGN KEY ("PS_SHIPMENT_ID") REFERENCES public."SHIPMENT"("SHIP_ID") ON UPDATE CASCADE ON DELETE RESTRICT NOT VALID;


--
-- Name: PRODUCT_SHIPMENT PRODUCT_SHIPMENT_PS_STATUS_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PRODUCT_SHIPMENT"
    ADD CONSTRAINT "PRODUCT_SHIPMENT_PS_STATUS_fkey" FOREIGN KEY ("PS_STATUS") REFERENCES public."APP_CONFIG"("PROPERTY_ID") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: SHIPMENT SHIPMENT_SHIP_EMP_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SHIPMENT"
    ADD CONSTRAINT "SHIPMENT_SHIP_EMP_ID_fkey" FOREIGN KEY ("SHIP_EMP_ID") REFERENCES public."EMPLOYEE"("EMP_ID") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: SHIPMENT SHIPMENT_SHIP_STATUS_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SHIPMENT"
    ADD CONSTRAINT "SHIPMENT_SHIP_STATUS_fkey" FOREIGN KEY ("SHIP_STATUS") REFERENCES public."APP_CONFIG"("PROPERTY_ID") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: SHIPMENT SHIPMENT_SHIP_VAN_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SHIPMENT"
    ADD CONSTRAINT "SHIPMENT_SHIP_VAN_ID_fkey" FOREIGN KEY ("SHIP_VAN_ID") REFERENCES public."VAN_DETAILS"("VAN_ID") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: SHIPMENT SHIPMENT_SHIP_WAREHOUSE_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SHIPMENT"
    ADD CONSTRAINT "SHIPMENT_SHIP_WAREHOUSE_ID_fkey" FOREIGN KEY ("SHIP_WAREHOUSE_ID") REFERENCES public."WAREHOUSE_DETAILS"("WAREHOUSE_ID") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: WAREHOUSE_PRODUCT_ENTRY WAREHOUSE_PRODUCT_ENTRY_ENTRY_STATUS_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."WAREHOUSE_PRODUCT_ENTRY"
    ADD CONSTRAINT "WAREHOUSE_PRODUCT_ENTRY_ENTRY_STATUS_fkey" FOREIGN KEY ("ENTRY_STATUS") REFERENCES public."APP_CONFIG"("PROPERTY_ID") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: WAREHOUSE_PRODUCT_ENTRY WAREHOUSE_PRODUCT_ENTRY_RECEIVED_BY_EMP_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."WAREHOUSE_PRODUCT_ENTRY"
    ADD CONSTRAINT "WAREHOUSE_PRODUCT_ENTRY_RECEIVED_BY_EMP_ID_fkey" FOREIGN KEY ("RECEIVED_BY_EMP_ID") REFERENCES public."EMPLOYEE"("EMP_ID") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: WAREHOUSE_PRODUCT_ENTRY WAREHOUSE_PRODUCT_ENTRY_WPE_PRODUCT_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."WAREHOUSE_PRODUCT_ENTRY"
    ADD CONSTRAINT "WAREHOUSE_PRODUCT_ENTRY_WPE_PRODUCT_ID_fkey" FOREIGN KEY ("WPE_PRODUCT_ID") REFERENCES public."PRODUCT_DETAILS"("PRODUCT_ID") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: WAREHOUSE_PRODUCT_ENTRY WAREHOUSE_PRODUCT_ENTRY_WPE_WAREHOUSE_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."WAREHOUSE_PRODUCT_ENTRY"
    ADD CONSTRAINT "WAREHOUSE_PRODUCT_ENTRY_WPE_WAREHOUSE_ID_fkey" FOREIGN KEY ("WPE_WAREHOUSE_ID") REFERENCES public."WAREHOUSE_DETAILS"("WAREHOUSE_ID") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: WAREHOUSE_PRODUCT_STOCK WAREHOUSE_PRODUCT_STOCK_WPS_PRODUCT_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."WAREHOUSE_PRODUCT_STOCK"
    ADD CONSTRAINT "WAREHOUSE_PRODUCT_STOCK_WPS_PRODUCT_ID_fkey" FOREIGN KEY ("WPS_PRODUCT_ID") REFERENCES public."PRODUCT_DETAILS"("PRODUCT_ID") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

