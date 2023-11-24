package com.example.demo.Controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.TexModel;
import com.example.demo.Model.VerifyModel;
import com.example.demo.Service.TexService;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000")
public class TexController {
	@Autowired
	private TexService service;
	@Tag(name = "Signin", description = "Login Endpoint")
	@PostMapping("/Signin")
	private String Login(@RequestBody Map<String, String> xLogin) {
	    String username = xLogin.get("username");
	    String password = xLogin.get("password");
	    String result = service.Login(username, password);
	    return result;
	}

	@Tag(name = "Signup", description = "Signup Endpoint")
    @PostMapping("/Signup")
    public String Signup(@RequestBody VerifyModel user) {
        return service.Signup(user);
    }
	
	@Tag(name = "List Colls", description = "List All Colls")
	@GetMapping("/list")
	private List<TexModel> Pets(){
		return service.getData();
	}
	
	@Tag(name = "Sort Colls by ID", description = "View Colls Data")
	@GetMapping("/data/{id}")
	private Optional<TexModel> viewPets(@PathVariable Long id) {
		return service.findbyID(id);
	}
	
	
	@Tag(name = "Add Colls", description = "Add New Colls")
	@PostMapping("/add")
	private TexModel addPet(@RequestBody TexModel data) {
		return service.addData(data);
	}
	
	@Tag(name = "Edit Colls", description = "Edit Existing Colls")
	@PutMapping("/edit/{id}")
	private TexModel editPet(@PathVariable Long id, @RequestBody TexModel data) {
		return service.editData(data, id);
	}
	
	@Tag(name = "Delete Data", description = "Delete The Existing Colls")
	@DeleteMapping("/delete/{id}")
	private String deletePet(@PathVariable Long id) {
		return service.deleteData(id);
	}
}
