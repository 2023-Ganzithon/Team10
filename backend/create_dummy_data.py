from company.models import Company
#우선 종합 점수 순으로 저장하겠
#1 삼성물산
company1 = Company.objects.create(
    company_name='삼성물산',
    company_img='company_images/samsungcnt.jpg',
    total_grade='A+',
    social_grade='A+',
    env_grade='A+',
    gov_grade='A+',
    profit=9394.12,
    revenue=264065.61,
    stock='company_stock_images/Samsungcnt.jpg',
    industry='건설·시공',
    division='대기업',
)



#2 skc
company2 = Company.objects.create(
    company_name='SKC',
    company_img='company_images/skc.jpg',
    total_grade='A+',
    social_grade='A+',
    env_grade='A+',
    gov_grade='A',
    profit=716.24,
    revenue=1117.42,
    stock='company_stock_images/Skc.jpg',
    industry='화학제품',
    division='대기업',
)


#3 POSCO홀딩스
company3 = Company.objects.create(
    company_name='POSCO홀딩스',
    company_img='company_images/posco.jpg',
    total_grade='A+',
    social_grade='A+',
    env_grade='A',
    gov_grade='A+',
    profit=16748.93,
    revenue=85898.19,
    stock='company_stock_images/Posco.jpg',
    industry='제철',
    division='대기업',
)



#4 삼성전기
company4 = Company.objects.create(
    company_name='삼성전기',
    company_img='company_images/samsungjeongi.jpg',
    total_grade='A',
    social_grade='A+',
    env_grade='A',
    gov_grade='A',
    profit=72449.94,
    revenue=7996.95,
    stock='company_stock_images/Samsungjeongi.jpg',
    industry='전기·전자',
    division='대기업',
)



#5 삼성전자
company5 = Company.objects.create(
    company_name='삼성전자',
    company_img='company_images/samsungjeonja.jpg',
    total_grade='A',
    social_grade='A+',
    env_grade='A',
    gov_grade='B+',
    profit=211674.83,
    revenue=253193.29,
    stock='company_stock_images/Samsungjeonja.jpg',
    industry='이동전화기',
    division='대기업',
)


#6 한화
company6 = Company.objects.create(
    company_name='한화',
    company_img='company_images/hanwha.jpg',
    total_grade='A',
    social_grade='A+',
    env_grade='B+',
    gov_grade='B+',
    profit=38799.25,
    revenue=1945.28,
    stock='company_stock_images/Hanwha.jpg',
    industry='화약',
    division='대기업',
)



#7(중복1) GS리테일
company7 = Company.objects.create(
    company_name='GS리테일',
    company_img='company_images/gsretail.jpg',
    total_grade='A',
    social_grade='A',
    env_grade='A+',
    gov_grade='A',
    profit=105693.38,
    revenue=2564.13,
    stock='company_stock_images/Gsretail.jpg',
    industry='편의점',
    division='대기업',
)


#8 삼성바이오로직스
company8 = Company.objects.create(
    company_name='삼성바이오로직스',
    company_img='company_images/samsungbio.jpg',
    total_grade='A+',
    social_grade='A',
    env_grade='A',
    gov_grade='A+',
    profit=24372.86,
    revenue=9680.51,
    stock='company_stock_images/Samsungbio.jpg',
    industry='생물학적 제제',
    division='대기업',
)



#9 한전KPS
company9 = Company.objects.create(
    company_name='한전KPS',
    company_img='company_images/hjkps.jpg',
    total_grade='A',
    social_grade='A',
    env_grade='A',
    gov_grade='A',
    profit=14259.13,
    revenue=1293.78,
    stock='company_stock_images/Hjkps.jpg',
    industry='일반전기',
    division='공공기관',
)


#10 SK바이오사이언스
company10 = Company.objects.create(
    company_name='SK바이오사이언스',
    company_img='company_images/skbio.jpg',
    total_grade='A',
    social_grade='A',
    env_grade='B+',
    gov_grade='A',
    profit=4567.26,
    revenue=1153.79,
    stock='company_stock_images/Skbio.jpg',
    industry='생물학적 제제',
    division='대기업',
)



#11 씨에스윈드
company11 = Company.objects.create(
    company_name='씨에스윈드',
    company_img='company_images/cswind.jpg',
    total_grade='A',
    social_grade='B+',
    env_grade='B+',
    gov_grade='A',
    profit=4567.26,
    revenue=1153.79,
    stock='company_stock_images/Cswind.jpg',
    industry='생물학적 제제',
    division='대기업',
)


#12 HD현대인프라코어
company12 = Company.objects.create(
    company_name='HD현대인프라코어',
    company_img='company_images/hdinfra.jpg',
    total_grade='A',
    social_grade='A+',
    env_grade='A+',
    gov_grade='B+',
    profit=2822.47,
    revenue=42049.08,
    stock='company_stock_images/Hdinfra.jpg',
    industry='건설',
    division='대기업',
)


#13 한전기술(중복1)
company13 = Company.objects.create(
    company_name='한전기술',
    company_img='company_images/hjec.jpg',
    total_grade='A',
    social_grade='A+',
    env_grade='B+',
    gov_grade='A',
    profit=5052.91,
    revenue=121.05,
    stock='company_stock_images/Hjec.jpg',
    industry='엔지니어링',
    division='중견기업',
)


#14 롯데칠성음료
company14 = Company.objects.create(
    company_name='롯데칠성음료',
    company_img='company_images/lottechilsung.jpg',
    total_grade='A',
    social_grade='A',
    env_grade='A+',
    gov_grade='B+',
    profit=26423.08,
    revenue=2028.04,
    stock='company_stock_images/Lottechilsung.jpg',
    industry='비알코올',
    division='대기업',
)


#15 HD현대중공업
company15 = Company.objects.create(
    company_name='HD현대중공업',
    company_img='company_images/hdjg.jpg',
    total_grade='A',
    social_grade='A',
    env_grade='A',
    gov_grade='B+',
    profit=90653.48,
    revenue=2867.97,
    stock='company_stock_images/Hdjg.jpg',
    industry='선박 건조',
    division='대기업',
)


#16 HD현대
company16 = Company.objects.create(
    company_name='HD현대',
    company_img='company_images/hd.jpg',
    total_grade='A',
    social_grade='A+',
    env_grade='B+',
    gov_grade='B+',
    profit=3472.3,
    revenue=3166.5,
    stock='company_stock_images/Hd.jpg',
    industry='중공',
    division='대기업',
)


#17 GS글로벌
company17 = Company.objects.create(
    company_name='GS글로벌',
    company_img='company_images/gsglobal.jpg',
    total_grade='B+',
    social_grade='B+',
    env_grade='B+',
    gov_grade='B+',
    profit=43512.45,
    revenue=726.36,
    stock='company_stock_images/Gsglobal.jpg',
    industry='상품도매',
    division='대기업',
)


#18 한미글로벌(중복3)
company18 = Company.objects.create(
    company_name='한미글로벌',
    company_img='company_images/hg.jpg',
    total_grade='B+',
    social_grade='A+',
    env_grade='A',
    gov_grade='B',
    profit=1743.98,
    revenue=122.9,
    stock='company_stock_images/Hg.jpg',
    industry='건축설계',
    division='중견기업',
)


#19 하이트진로홀딩스(중복1)
company19 = Company.objects.create(
    company_name='하이트진로홀딩스',
    company_img='company_images/hitejinro.jpg',
    total_grade='B+',
    social_grade='A',
    env_grade='A',
    gov_grade='B',
    profit=350.06,
    revenue=306.91,
    stock='company_stock_images/Hitejinro.jpg',
    industry='중공',
    division='대기업',
)


#20 한온시스템
company20 = Company.objects.create(
    company_name='한온시스템',
    company_img='company_images/hanon.jpg',
    total_grade='B+',
    social_grade='A+',
    env_grade='B+',
    gov_grade='B',
    profit=32028.76,
    revenue=87.11,
    stock='company_stock_images/Hanon.jpg',
    industry='공기 조화장치',
    division='중견기업',
)


#21 HDC현대산업개발
company21 = Company.objects.create(
    company_name='HDC현대산업개발',
    company_img='company_images/hdc.jpg',
    total_grade='B+',
    social_grade='A',
    env_grade='B+',
    gov_grade='B',
    profit=32835.42,
    revenue=1100.39,
    stock='company_stock_images/Hdc.jpg',
    industry='아파트 건설',
    division='대기업',
)




