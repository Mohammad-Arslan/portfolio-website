"""Generate the portfolio resume: python -m pip install reportlab && python scripts/generate_resume.py."""
from pathlib import Path
import reportlab
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, ListFlowable, ListItem, PageBreak, KeepTogether, HRFlowable

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "Mohammad_Arslan_Resume.pdf"
# Embed bundled TrueType fonts so readers do not substitute fonts or distort spacing.
font_dir = Path(reportlab.__file__).parent / "fonts"
pdfmetrics.registerFont(TTFont("ResumeSans", str(font_dir / "Vera.ttf")))
pdfmetrics.registerFont(TTFont("ResumeSans-Bold", str(font_dir / "VeraBd.ttf")))
pdfmetrics.registerFontFamily("ResumeSans", normal="ResumeSans", bold="ResumeSans-Bold")
INK = colors.HexColor("#172B43")
ACCENT = colors.HexColor("#176D75")
BODY = colors.HexColor("#263545")
styles = {
    "name": ParagraphStyle("name", fontName="ResumeSans-Bold", fontSize=21, leading=25, alignment=TA_CENTER, textColor=INK),
    "title": ParagraphStyle("title", fontName="ResumeSans-Bold", fontSize=11, leading=15, alignment=TA_CENTER, textColor=ACCENT),
    "contact": ParagraphStyle("contact", fontName="ResumeSans", fontSize=8.5, leading=12, alignment=TA_CENTER, textColor=BODY),
    "body": ParagraphStyle("body", fontName="ResumeSans", fontSize=9.1, leading=12.2, textColor=BODY, spaceAfter=4),
    "skill": ParagraphStyle("skill", fontName="ResumeSans", fontSize=8.8, leading=11.5, textColor=BODY, spaceAfter=3),
    "section": ParagraphStyle("section", fontName="ResumeSans-Bold", fontSize=10, leading=13, textColor=ACCENT, spaceBefore=10, spaceAfter=4),
    "role": ParagraphStyle("role", fontName="ResumeSans-Bold", fontSize=9.6, leading=13, textColor=INK, spaceBefore=6, spaceAfter=2),
    "meta": ParagraphStyle("meta", fontName="ResumeSans", fontSize=8.8, leading=12, textColor=colors.HexColor("#536372"), spaceAfter=4),
}
story = []
def para(text, kind="body"):
    return Paragraph(text, styles[kind])
def section(title):
    story.extend([para(title.upper(), "section"), HRFlowable(width="100%", thickness=.5, color=colors.HexColor("#C7D4DA")), Spacer(1, 5)])
def bullets(items):
    return ListFlowable([ListItem(para(item), leftIndent=2) for item in items], bulletType="bullet", start="circle", leftIndent=10, bulletFontSize=5, spaceAfter=3)
def job(title, employer, dates, items):
    story.append(KeepTogether([para(f"{title} | {employer}", "role"), para(f"Lahore, Pakistan | {dates}", "meta"), bullets(items)]))
def project(title, stack, text):
    story.append(KeepTogether([para(title, "role"), para(stack, "meta"), para(text)]))

story += [para("MOHAMMAD ARSLAN", "name"), para("Senior Full-Stack Engineer | PHP / Laravel &amp; React", "title"), Spacer(1, 5),
    para('+92-345-3221067 | <link href="mailto:mohammadarslan.tech@gmail.com">mohammadarslan.tech@gmail.com</link> | Lahore, Pakistan', "contact"),
    para('<link href="https://mohammad-arslan.netlify.app/">mohammad-arslan.netlify.app</link> | <link href="https://www.linkedin.com/in/mohammad-arslan-rajpoot">linkedin.com/in/mohammad-arslan-rajpoot</link>', "contact"),
    para("Open to worldwide remote roles and relocation | Notice period: one month", "contact")]
section("Professional summary")
story.append(para("Senior full-stack engineer building production web applications since December 2020, specialising in PHP/Laravel, React and MySQL. Develop ERP, SaaS and CRM systems with a focus on billing, payments, accounting and reliable background processing. Hands-on experience with transaction handling, database concurrency, automated regression testing and deployment on AWS and VPS platforms."))
section("Core technical skills")
for text in [
    "<b>Backend:</b> PHP, Laravel, REST APIs, queues, transactions, Redis, Laravel Horizon, Octane, Reverb",
    "<b>Frontend:</b> React, TypeScript, JavaScript, Next.js, Inertia.js, Vue.js, Tailwind CSS",
    "<b>Data:</b> MySQL, PostgreSQL, Elasticsearch; relational modelling, query optimisation and locking",
    "<b>Cloud &amp; deployment:</b> AWS, Linode, Contabo, Hostinger, Docker, Linux, Nginx, CI/CD, Git",
    "<b>Quality &amp; integrations:</b> automated testing, code review, production debugging; Stripe, PayPal, Square, Google/Microsoft APIs",
]: story.append(para(text, "skill"))
section("Professional experience")
job("Senior Software Engineer", "Beaconhouse Technology", "June 2025 - Present", [
    "Develop PHP/Laravel and React features for Supernova SIS, a multi-branch school ERP serving 10,000+ students, across billing, payments, accounting, payroll and attendance.",
    "Investigate and resolve challan, concession and carry-forward inconsistencies across invoices, payments and journal entries; add regression coverage for financial edge cases.",
    "Harden concurrent billing and payment imports with transaction handling, per-student locking, duplicate-processing safeguards and job dispatch after commit.",
    "Own UCS ERP development and contribute frontend features to Beams360, a separate MERN platform with Python microservices, including LMS, gradebook and assessment reporting.",
])
job("Senior Software Engineer", "Back Bone Technology", "July 2024 - June 2025", [
    "Built call-center CRM features using Laravel, Vue.js, MySQL and Elasticsearch, including VoIP/SIP integration and real-time search.",
    "Developed CMS and customer-service portal workflows with Laravel, Vue.js and Redis, covering backend APIs, interfaces and content/search functionality.",
])
job("Senior Software Engineer", "Softpers Interactive", "July 2023 - July 2024", [
    "Built ticket-based task and team workflows for MineIQ using Laravel, React and MySQL.",
    "Developed Congo Cloth Company with Laravel, Inertia and React, including multi-role access and order/referral rewards.",
])
job("Software Engineer", "IKS Logics Pvt Ltd", "November 2021 - July 2023", [
    "Developed iProsper CRM with PHP and React, integrating Stripe/PayPal payments and Google/Microsoft services.",
    "Built Laravel applications for veterinary records and NFC event attendance; integrated Square APIs into a React restaurant application.",
])
story.append(PageBreak())
section("Earlier experience")
job("Software Engineer", "Viltco Technologies", "December 2020 - November 2021", [
    "Built Core PHP budget and time-sheet workflows; developed an online food-ordering module with Laravel and React.",
])

section("Selected engineering work")
project("RetailPulse | Retail ERP & POS SaaS", "Personal product | Laravel 13, React, Inertia, MySQL, Redis, Reverb, Docker", "Founder and sole developer of a modular monolith spanning accounting, inventory, purchasing, sales, HR/payroll and fixed assets. Designed branch-aware permissions and approval workflows. Built a streaming import/export engine with separate validation and processing stages, queued jobs and real-time updates. Configured Docker-based deployment with Nginx, Octane and Horizon on a Contabo VPS. Screenshots and a recorded walkthrough are available in my portfolio; the source code is private.")
project("Supernova SIS | School ERP", "Beaconhouse Technology | PHP, Laravel, React, MySQL, queues", "Develop and maintain financial and operational workflows in a multi-branch school system. Investigate production data inconsistencies, payment reconciliation and concurrency failures. Implement transaction and locking safeguards and regression coverage for billing, payment reversals and carry-forward calculations. Client administrative access and code remain private.")
project("iProsper CRM | Payments & integrations", "IKS Logics | PHP, Cervo, React, MySQL", "Delivered CRM functionality with Stripe and PayPal payment integration and Google/Microsoft data synchronisation. Portfolio screenshots show the client application without exposing login credentials.")
project("Beams360 | Education platform", "Beaconhouse Technology | React frontend; MERN platform with Python microservices", "Contribute frontend features for school portals, including LMS workflows, gradebook and assessment reporting, and an Emirates ID card-reading integration. This is a separate platform from the Laravel-based Supernova SIS.")
section("Additional experience")
story.append(para("React Native (Expo), Supabase and Firebase Cloud Messaging through PennyPilot, a personal budgeting application. Additional experience with Node.js, Python and MongoDB across project work. Core specialisation remains Laravel and React."))
section("Education")
story.append(para("<b>BS Software Engineering</b> | Virtual University of Pakistan | June 2018"))
section("Professional development")
story.append(para("Mastering Full Stack - Laravel / React JS (Udemy) | SQL Mastery (Udemy)"))
section("Languages")
story.append(para("English - Professional working proficiency | Urdu - Native"))

def footer(canvas, doc):
    canvas.setTitle("Mohammad Arslan - Senior PHP Laravel and React Engineer")
    canvas.setAuthor("Mohammad Arslan")
    canvas.setFont("ResumeSans", 8)
    canvas.setFillColor(colors.HexColor("#6A7A87"))
    canvas.drawString(38, 24, "Mohammad Arslan | PHP / Laravel & React")
    canvas.drawRightString(A4[0] - 38, 24, f"{doc.page}")

if __name__ == "__main__":
    doc = SimpleDocTemplate(str(OUTPUT), pagesize=A4, rightMargin=38, leftMargin=38, topMargin=32, bottomMargin=36, title="Mohammad Arslan - Senior Full-Stack Engineer", author="Mohammad Arslan", invariant=1)
    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    print(OUTPUT)
