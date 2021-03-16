//엘리먼트들에 대한 데이터를 테이블 형식으로 화면에 표현하기

function makeTable(elem){  //elem를 가지고 테이블을 만들어주는 함수 생성
	//(????????이거 맞나?) elem = empRowList = emplist.xml 에서 <ROW> ~ ~ </ROW>부분
	$table = $("<table border = 1>");
	//참고) 변수 앞에 $붙으면 변수안에 들어가는 값([?])은 jquery =? .
	// $table = <table> </table> .css{border =1}  <- border 가 1인 테이블 객체를 만들어서 변수 $table에 넣음.



	//컬럼 정의하기
	for(var i =0; i <1; i++){  //변수 i가 1전까지 i를 증가시켜가면서 반복해서 실행.
		//컬럼만 정의해 줄 거니까 한번만 실행되도록 for문 작성,
		$tr = $("<tr>");   //$tr = <tr></tr> 변수선언.
				for(var j=0; j < elem.eq(0).children().length;  j++){
		      //j가 0부터, elem 의 0번째 인덱스의 자식요소의 길이(총 4인덱스까지 잇음),까지 j를 증가해가면서 반복해서 실행
					//(<EMPLOYEE_ID>, <LAST_NAME>, <EMAIL>, <PHONE_NUMBER>, <HIRE_DATE> 01234)


					$td = $("<td>").append(elem.eq(0).children().eq(j).prop("tagName"));
					//참고: prop():선택한 요소(선택 상자,체크 박스,라디오 버튼)의 상태 속성값을 가져옴.
					// <td></td> 에 (elem.eq(0).children().eq(j).prop("tagName"))를 <td></td> 의 뒤에 반복 추가

					/*empRowList 의 0번째 인덱스인 <ROW></ROW> 의 자식요소의 (j)번째 인덱스의 요소의 테그명(<EMPLOYEE_ID>)을 가져와서
					(참고)자식요소 :(<EMPLOYEE_ID>(0), <LAST_NAME>(1), <EMAIL>(2), <PHONE_NUMBER>3, <HIRE_DATE>4 ))
          변수 	$td에 담음. <- 이걸 반복,
					*/
          /*1번 : <EMPLOYEE_ID> 로 tagname 가져옴
					  2번반복: <EMPLOYEE_ID> 뒤에 <LAST_NAME>를 추가함.
						3번반복: <LAST_NAME> 뒤에  <EMAIL> 추가..........반복 */
					$tr.append($td); // $td를 $tr의 마지막 부분에 추가함.
				}
		$table.append($tr); //컬럼이 정의된 테이블 로우($tr)를 $table(<table> </table>)에 추가함.
	}

	//데이터 넣기
	for(var i =0; i<elem.length; i++){
  //i는 0부터 <ROW> ~ ~ </ROW> 갯수만큼 i를 증가시키면서 반복, <-사원들의 수니까(i는 106까지잇음 아마도..?)
			$tr = $("<tr>"); // 	$tr = <tr><tr> 변수선언
			for(var j=0; j< elem.eq(i).children().length; j++){
				//j: <ROW></ROW>의 i번째 인덱스의 자식요소 길이전까지 (길이 =컬럼수 5개 ),0부터 1개씩 증가하면서 반복
				$td = $("<td>").append(elem.eq(i).children().eq(j).text());
			 //[<ROW></ROW>의 i번째 인덱스(=1번째 사원)]의 []자식요소의 j번째 인덱스 (1번째 사원의 정보)] 를 문자열로 가져와서,
      //가져온 문자열을 <td></td>에 추가해서  변수$td 에 넣기.
			/*1. King 의 EMPLOYEE_ID 추가. LAST_NAME추가. EMAIL 추가, PHONE_NUMBER추가. HIRE_DATE추가. 이걸로 j가 끝났으니까,
			i를 1증가시켜서 1번째 i인 Kochhar 로 가서,
			Kochhar 의 EMPLOYEE_ID 추가. LAST_NAME추가. EMAIL 추가, PHONE_NUMBER추가. HIRE_DATE추가........이딴식으로 반복*/
				$tr.append($td); //j가 4까지 가면 td를 tr에 추가 ---> king 의 데이터 한줄 완성!
			}
			 $table.append($tr); //i 가 106번쨰 사원까지 다 반복되고 나서 이를 table에 넣음.
	}

	//만들어진 테이블 반환
	return $table;
}
